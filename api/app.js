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


const landOwnerRoute= require("./routes/landOwnerRoute")
const propertyRoute = require("./routes/propertyRoute")
const deviceRoute = require("./routes/device")
const locationRoute = require('./routes/locationRoute')

app.use("/api/landOwner",landOwnerRoute)
app.use("/api/location", locationRoute)
app.use("/api/property", propertyRoute)
app.use("/api/device",deviceRoute)
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
const aedes = require('aedes');
const mqttServer = aedes();

// Attach MQTT server to Express server
const mqttListener = require('net').createServer(mqttServer.handle);
mqttListener.listen(1883, () => {
    console.log('MQTT server is running on port 1883');
});
mqttServer.on('client', (client) => {
    console.log('Client connected:', client.id);
});

mqttServer.on('clientDisconnect', (client) => {
    console.log('Client disconnected:', client.id);
});

mqttServer.on('publish', (packet, client) => {
    console.log('Message received:', packet.payload.toString());
});
