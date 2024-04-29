const mongoose = require("mongoose")

const reservation = new mongoose.Schema({
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: "landOwner" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    timeStamp: Date,
})

module.exports = mongoose.model("reservation", reservation)
