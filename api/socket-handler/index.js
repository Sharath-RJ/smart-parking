const Device = require('../models/device')
const mongoose = require('mongoose')

module.exports = {
    parked:async(deviceId, socket)=>{
        try{
            const id = new mongoose.Types.ObjectId(deviceId)
            await Device.findOneAndUpdate({_id:id}, {status: true}, {new: true})
        }catch(error){
            console.log("some error");
            console.log(error);
        }
    },
    unparked:async(deviceId, socket)=>{
        try{
            await Device.findOneAndUpdate({propertyId:deviceId}, {status: false}, {new: true})
        }catch(error){
            console.log("some error");
        }
    }
}