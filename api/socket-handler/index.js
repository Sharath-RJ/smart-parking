const Device = require('../models/device')
const mongoose = require('mongoose')

const SOCKET_SERVER = socket_app.listen(SOCKET_PORT, () => {
    console.log(`Socket server is running on port ${SOCKET_PORT}`);
})

// socket controllers
const { parked, unparked } = require('./socket-handler/index')

const socketIo = require("socket.io")
const io = socketIo(SOCKET_SERVER)

const device = io.of('/')

device.on('connection', (socket)=>{
    console.log('connected');

    socket.on('parked',(deviceId)=>{
        console.log('parked ',deviceId);
        parked(deviceId, socket)
    })

    socket.on('unparked',(deviceId)=>{
        console.log('unparked ',deviceId);
        unparked(deviceId, socket)
    })

    socket.on('disconnect',()=>{
        console.log('disconnected');
    })

    setTimeout(()=>{
        socket.emit('blink', 'Hello from blinki');
    }, 4000)
})


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