const ParkingStatus = require("../models/parking_status")
const Reservation = require("../models/reservation")
const Landowner = require("../models/landOwner")

const updateParkingStatus = async (req, res) => {
    const { locationId, status } = req.body
    try {
        const parkingStatus = new ParkingStatus({
            location_id: locationId,
            status: status,
            timestamp: new Date(),
        })
        await parkingStatus.save()
        res.status(200).json({ message: "Parking status updated successfully" })
    } catch (error) {
        console.error("Parking status update error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const getParkingSlots = async (req, res) => {
    const { latitude, longitude } = req.query
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
        res.status(200).json({ availableSlots })
    } catch (error) {
        console.error("Get parking slots error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { updateParkingStatus, getParkingSlots }
