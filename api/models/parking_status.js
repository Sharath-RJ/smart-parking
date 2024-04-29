const mongoose = require("mongoose")

const parkingStatus = new mongoose.Schema({
   locationId:{type:mongoose.Schema.Types.ObjectId,ref:"landOwner"},
   status:Boolean,
   timeStamp:Date
})

module.exports = mongoose.model("parkingStatus", parkingStatus)
