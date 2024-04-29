const express = require("express")
const router = express.Router()
const WebSocket = require("ws")

// Import WebSocket-related functions
const { broadcastParkingStatus } = require("../controllers/locationController")

// Route handler to handle parking status updates via WebSocket
router.post("/update/parking-status", (req, res) => {
    try {
        // Parse the request body to extract locationId and status
        const { locationId, status } = req.body

        // Assuming the WebSocket server instance is globally accessible
        // Broadcast the parking status update to all connected clients
        broadcastParkingStatus({ locationId, status })

        res.status(200).json({
            message: "Parking status update broadcasted successfully",
        })
    } catch (error) {
        console.error("Error broadcasting parking status update:", error)
        res.status(500).json({ message: "Internal server error" })
    }
})

// Route handler to handle parking slots requests via WebSocket
router.get("/parking-slots", (req, res) => {
    try {
        // Assuming the WebSocket server instance is globally accessible
        // Broadcast a message to request parking slots data
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(
                    JSON.stringify({
                        type: "getParkingSlots",
                        payload: req.query,
                    })
                )
            }
        })

        res.status(200).json({ message: "Request for parking slots data sent" })
    } catch (error) {
        console.error("Error sending request for parking slots data:", error)
        res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router
