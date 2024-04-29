const LandOwner = require("../models/landOwner")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const getLandOwner = async(req, res)=>{
    const landOwner = req.landOwner;

    if(!landOwner) return res.status(401).json({ success:false,error: "Unauthorized" })

    res.status(200).json({success:true, landOwner:landOwner})
}

const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            ownerContact,
            ownerAddress
        } = req.body
        let existingLandOwner = await LandOwner.findOne({ email })
        if (existingLandOwner) {
            return res.status(400).json({ error: "Land owner already exists" })
        }
        const newLandOwner = new LandOwner({            name,
            email,
            password,
            ownerContact,
            ownerAddress
        })
        const salt = await bcrypt.genSalt(10)
        newLandOwner.password = await bcrypt.hash(password, salt)
        await newLandOwner.save()
        res.status(200).json({success:true, message:"Login successfull"})
    } catch (error) {
        console.error("Error registering land owner:", error)
        res.status(500).json({ error: "Failed to register land owner" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let existingLandOwner = await LandOwner.findOne({ email })
        if (!existingLandOwner) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        const isMatch = await bcrypt.compare(
            password,
            existingLandOwner.password
        )
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        const payload = {
            _id:existingLandOwner._id
        }
        jwt.sign(payload, "secret", (err, token) => {
            if (err) throw err
            res.status(200).json({ success:true, token })
        })
    } catch (error) {
        console.error("Error logging in land owner:", error)
        res.status(500).json({ error: "Failed to log in land owner" })
    }
}

module.exports = {
    login,
    register,
    getLandOwner
}
