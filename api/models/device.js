const mongoose = require("mongoose")

const DeviceSchema = new mongoose.Schema({
     status:{
      type:Boolean,
      default:false,
     },
     label:{
      type:String,
      required:false
     },
     propertyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"property",
        required:true
     }
})

module.exports = mongoose.model("device", DeviceSchema)
