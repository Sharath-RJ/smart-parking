const Device = require('../models/device')

module.exports = {
    parked:async(deviceId, socket)=>{
        try{
            await Device.findOneAndUpdate({propertyId:deviceId}, {status: true}, {new: true})
        }catch(error){
            console.log("some error");
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