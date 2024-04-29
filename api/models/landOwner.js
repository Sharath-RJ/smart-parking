const mongoose = require("mongoose")

const landOwnerSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    totalSpaceAvailable: Number,
    ownerName: String,
    ownerContact: String,
    locationAddress: String,
    userName:String,
    email:String,
    password:String,
    devices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Device",
        },
    ],
})

module.exports = mongoose.model("landOwner", landOwnerSchema)
