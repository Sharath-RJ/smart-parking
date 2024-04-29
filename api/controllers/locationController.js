// const ParkingStatus = require("../models/parking_status")
// const Reservation= require("../models/reservation")
// const Landowner= require("../models/landOwner")

// const updateParkingStatus = async (req, res) => {
//     const { locationId, status } = req.body
//     try {
//         const parkingStatus = new ParkingStatus({
//             location_id: locationId,
//             status: status,
//             timestamp: new Date(),
//         })
//         await parkingStatus.save()
//         res.status(200).json({ message: "Parking status updated successfully" })
//     } catch (error) {
//         console.error("Parking status update error:", error)
//         res.status(500).json({ message: "Internal server error" })
//     }
// }

// const getParkingSlots = async (req, res) => {
//     // Extract user's location from the request (for demonstration purpose, assuming it's provided in the query parameters)
//     const { latitude, longitude } = req.query

//     try {
//         // Fetch all landowners within a certain radius of the user's location (you would need to implement this logic)
//         const landowners = await Landowner.find({
//             location: {
//                 $near: {
//                     $geometry: {
//                         type: "Point",
//                         coordinates: [
//                             parseFloat(longitude),
//                             parseFloat(latitude),
//                         ], // Assuming coordinates are in [longitude, latitude] format
//                     },
//                     $maxDistance: 1000, // 1km radius (you can adjust this distance as needed)
//                 },
//             },
//         })

//         // Iterate through the landowners and check for available parking slots
//         const availableSlots = []
//         for (const landowner of landowners) {
//             // Check if any parking slots are available at this landowner's location
//             const reservations = await Reservation.find({
//                 location_id: landowner._id,
//             })
//             const occupiedSlotsCount = reservations.length
//             const availableSlotsCount =
//                 landowner.parking_slots - occupiedSlotsCount

//             // If there are available slots, add them to the list
//             if (availableSlotsCount > 0) {
//                 availableSlots.push({
//                     locationId: landowner._id,
//                     locationName: landowner.name, // Assuming there's a field for landowner name
//                     availableSlots: availableSlotsCount,
//                 })
//             }
//         }

//         // Return available parking slots to the user
//         res.status(200).json({ availableSlots })
//     } catch (error) {
//         // If an error occurs, return internal server error
//         console.error("Get parking slots error:", error)
//         res.status(500).json({ message: "Internal server error" })
//     }
// }

// module.exports = { updateParkingStatus, getParkingSlots }