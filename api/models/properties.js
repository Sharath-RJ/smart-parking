const mongoose = require("mongoose")

const propertySchema = mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'landowner'
    },
    name:{
        type:String,
        required:false
    },
    spaceType:{
        type:String,
        enum:["plot","ms","sf"]
    },
    spaceAvailable:{
        type:Number,
        required:true
    },
    devices:[
        {
            type:mongoose.Types.ObjectId,
            ref:"device"
        }
    ],
    location: {
        type: {
          type: String, // Don't forget to specify the type as "Point"
          enum: ['Point'], // This ensures the field can only store "Point" type data
          required: true
        },
        coordinates: {
          type: [Number], // Array of two numbers: longitude and latitude
          required: true
        }
    }
})

propertySchema.index({ location: '2dsphere' });

module.exports = mongoose.model("property", propertySchema)