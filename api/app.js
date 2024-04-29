
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

const userRoute = require("./routes/userRoute")
const locationRoute= require("./routes/locationRoute")
const landOwnerRoute= require("./routes/landOwnerRoute")
const mapRoute=require("./routes/mapRoute")
app.use("/api/user", userRoute)
app.use("/api/landOwner",landOwnerRoute)
app.use("/api/location", locationRoute)
app.use("/api/map",mapRoute)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
