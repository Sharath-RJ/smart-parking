const Reservation = require("../models/reservation")

const getUserReservations = async (req, res) => {
    const userId = req.user._id 
    try {
        const reservations = await Reservation.find({ user_id: userId })
        res.status(200).json({ reservations })
    } catch (error) {
        console.error("Error fetching user reservations:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { getUserReservations }
