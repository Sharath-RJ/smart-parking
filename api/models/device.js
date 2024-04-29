const mongoose = require("mongoose")

const DeviceSchema = new mongoose.Schema({
     status:{
      type:Boolean,
      default:false,
      required:true
     },
     label:{
      type:String,
      required:false
     },
     propertyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"properties",
        required:true
     }
})

module.exports = mongoose.model("Design", DeviceSchema)
