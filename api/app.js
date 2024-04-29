
const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
mongoose
    .connect("mongodb://localhost:27017/smartParking")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err))

const routes = require("./routes")
app.use("/api/user", )

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
