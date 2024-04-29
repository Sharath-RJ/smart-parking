
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const socket_app = express()
const cors = require("cors")

app.use(cors({
    origin:"*"
}
))
app.use(express.json())
mongoose
    .connect("mongodb://localhost:27017/smartParking")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err))


const locationRoute= require("./routes/locationRoute")
const landOwnerRoute= require("./routes/landOwnerRoute")

app.use("/api/landOwner",landOwnerRoute)
app.use("/api/location", locationRoute)


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

const PORT = 3001
const SOCKET_PORT = 3002

// use the server instance to create 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

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
        parked(deviceId, socket)
    })

    socket.on('unparked',(deviceId)=>{
        unparked(deviceId, socket)
    })

    socket.on('disconnect',()=>{
        console.log('disconnected');
    })

    setTimeout(()=>{
        socket.emit('blink', 'Hello from blinki');
    }, 4000)
})