const mongoose = require("mongoose")

const DeviceSchema = new mongoose.Schema({
     Name:String,
     location:{
        type:"Point",
        location:["logitude", "latitude"]
     }
})

module.exports = mongoose.model("Design", DeviceSchema)
