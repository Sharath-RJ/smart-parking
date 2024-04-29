const Landonwer = require("../models/landOwner")

const isAuth = async(req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const landOwner = await Landonwer.findById(decoded._id).select("-password")
        if(!landOwner) return res.status(404).json({success:false, message:"user not found"})
        req.landOwner = landOwner
        next()
    }catch{
        return res.status(404).json({success:false, message:"jwt malformed"})
    }
}

module.exports = {
    isAuth
}