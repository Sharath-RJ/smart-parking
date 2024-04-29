const mongoose = require("mongoose")

const landOwnerSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    ownerContact: String,
    ownerAddress: String,
})

module.exports = mongoose.model("landowner", landOwnerSchema)
