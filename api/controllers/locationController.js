// Import necessary modules and models
const WebSocket = require("ws")
const ParkingStatus = require("../models/parking_status")
const Reservation = require("../models/reservation")
const Landowner = require("../models/landOwner")

let wss // WebSocket Server instance

// Initialize WebSocket server
function initializeWebSocket(server) {
    wss = new WebSocket.Server({ server })

    wss.on("connection", function connection(ws) {
        console.log("A new client connected")

        ws.on("message", async function incoming(message) {
            console.log("Received message:", message)

            try {
                const data = JSON.parse(message)
                const { type, payload } = data

                if (type === "updateParkingStatus") {
                    const { locationId, status } = payload
                    // Update parking status in the database
                    const parkingStatus = new ParkingStatus({
                        location_id: locationId,
                        status: status,
                        timestamp: new Date(),
                    })
                    await parkingStatus.save()
                    // Broadcast updated parking status to all connected clients
                    broadcastParkingStatus()
                } else if (type === "getParkingSlots") {
                    // Fetch parking slots data
                    getParkingSlots(ws, payload)
                }
            } catch (error) {
                console.error("Error processing message:", error)
                // Handle error
            }
        })

        ws.on("close", function () {
            console.log("Client disconnected")
        })
    })
}

// Function to fetch parking slots data and send it to a specific client
async function getParkingSlots(client, { latitude, longitude }) {
    try {
        const landowners = await Landowner.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [
                            parseFloat(longitude),
                            parseFloat(latitude),
                        ],
                    },
                    $maxDistance: 1000,
                },
            },
        })

        const availableSlots = []
        for (const landowner of landowners) {
            const reservations = await Reservation.find({
                location_id: landowner._id,
            })
            const occupiedSlotsCount = reservations.length
            const availableSlotsCount =
                landowner.parking_slots - occupiedSlotsCount
            if (availableSlotsCount > 0) {
                availableSlots.push({
                    locationId: landowner._id,
                    locationName: landowner.name,
                    availableSlots: availableSlotsCount,
                })
            }
        }

        // Convert availableSlots to JSON string
        const parkingSlotsJSON = JSON.stringify({ availableSlots })

        // Send parking slots data to the client
        client.send(parkingSlotsJSON)
    } catch (error) {
        console.error("Error fetching parking slots:", error)
        // Handle error
    }
}

// Function to broadcast updated parking status to all connected clients
async function broadcastParkingStatus() {
    try {
        const { latitude, longitude } = req.query
        const landowners = await Landowner.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [
                            parseFloat(longitude),
                            parseFloat(latitude),
                        ],
                    },
                    $maxDistance: 1000,
                },
            },
        })

        const availableSlots = []
        for (const landowner of landowners) {
            const reservations = await Reservation.find({
                location_id: landowner._id,
            })
            const occupiedSlotsCount = reservations.length
            const availableSlotsCount =
                landowner.parking_slots - occupiedSlotsCount
            if (availableSlotsCount > 0) {
                availableSlots.push({
                    locationId: landowner._id,
                    locationName: landowner.name,
                    availableSlots: availableSlotsCount,
                })
            }
        }

        // Convert availableSlots to JSON string
        const parkingStatusJSON = JSON.stringify({ availableSlots })

        // Broadcast parking status to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(parkingStatusJSON)
            }
        })
    } catch (error) {
        console.error("Error broadcasting parking status:", error)
        // Handle error
    }
}

module.exports = { initializeWebSocket }
