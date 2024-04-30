const Landonwer = require("../models/landOwner")
const jwt = require('jsonwebtoken')

const isAuth = async(req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = await jwt.verify(token, "secret")
        const landOwner = await Landonwer.findById(decoded._id).select("-password")
        if(!landOwner) return res.status(404).json({success:false, message:"user not found"})
        req.landOwner = landOwner
        next()
    }catch(error){
        console.log(error);
        return res.status(404).json({success:false, message:"jwt malformed"})
    }
}

module.exports = {
    isAuth
}