
const Landowner = require("../models/reservation")

// Controller function to render the Google Maps interface with parking slot markers
const renderMap = async (req, res) => {
    try {
        // Fetch all landowners from the database
        const landowners = await Landowner.find()

        // Prepare data to be sent to the frontend
        const parkingData = landowners.map((landowner) => ({
            name: landowner.name,
            location: landowner.location, // Assuming this is the GeoJSON point field
            availableSlots: landowner.parking_slots, // Assuming this is the field representing available parking slots
        }))

        // Render the map view and pass parking slot data
        res.render("map", { parkingData })
    } catch (error) {
        // If an error occurs, return internal server error
        console.error("Render map error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

// Route to render Google Maps interface with parking slot markers

module.exports = {
    renderMap
}
