const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   locationId:{type:mongoose.Schema.Types.ObjectId,ref:"landOwner"},
   status:Boolean,
   timeStamp:Date
})

module.exports = mongoose.model("User", userSchema)
