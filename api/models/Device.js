const mongoose = require("mongoose")

const DeviceSchema = new mongoose.Schema({
     Name:String
})

module.exports = mongoose.model("Design", DeviceSchema)
