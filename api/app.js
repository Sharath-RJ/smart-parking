
const express = require("express")
const mongoose = require("mongoose")
const app = express()
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

// use the server instance to create 
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const socketIo = require("socket.io")

const io = socketIo(server)

const device = io.of('/')

device.on('connection', (socket)=>{
    console.log('connected');

    socket.on('parked',(msg)=>{
        console.log("parked", msg);
    })

    socket.on('unparked',(msg)=>{
        console.log("unparked", msg);
    })

    socket.on('disconnect',()=>{
        console.log('disconnected');
    })

    setTimeout(()=>{
        socket.emit('blink', 'Hello from blinki');
    }, 4000)
})