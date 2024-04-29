const mongoose = require("mongoose")

const propertySchema = mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    spaceType:{
        type:"String",
        enum:["plot","ms","sf"]
    },
    spaceAvailable:{
        type:Number,
        required:true
    },
    location:{
        type:"Point",
        location:["logitude", "latitude"]
    }
})

module.exports = mongoose.model("propery", propertySchema)