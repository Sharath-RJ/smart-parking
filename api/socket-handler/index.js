const Device = require('../models/device')
const mongoose = require('mongoose')

module.exports = {
    parked:async(deviceId, socket)=>{
        try{
            const id = new mongoose.Types.ObjectId(deviceId)
            await Device.findOneAndUpdate({_id:id}, {status: true}, {new: true})
        }catch(error){
            console.log("some error ", error);
        }
    },
    unparked:async(deviceId, socket)=>{
        try{
            const id = new mongoose.Types.ObjectId(deviceId)
            console.log(id);
            await Device.findOneAndUpdate({_id:id}, {status: false}, {new: true})
        }catch(error){
            console.log("some error ", error);
        }
    }
}