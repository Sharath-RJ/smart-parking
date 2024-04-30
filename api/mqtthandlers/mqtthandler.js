const Device = require('../models/device')
const mongoose = require('mongoose')

// parket/834982749877
const mqtthandler = async(payload)=>{
    const operation = payload.split('/')[0]
    const data = payload.split('/')[1]
    console.log(operation , data);
    switch(operation){
        case "parked":
            try{
                const id = new mongoose.Types.ObjectId(data)
                await Device.findByIdAndUpdate(id, {status: true}, {new: true})
            }catch(error){
                console.log("some error ", error);
            }
            break;
        case "unparked":
            try{
                const id = new mongoose.Types.ObjectId(data)
                await Device.findByIdAndUpdate(id, {status: false}, {new: true})
            }catch(error){
                console.log("some error ", error);
            }
            break;
        default:
            console.log("invalid opearion ", operation, data)
            break;
    }
}

module.exports = mqtthandler