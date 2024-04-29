const LandOwner = require("../models/landOwner")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const {
            latitude,
            longitude,
            totalSpaceAvailable,
            ownerName,
            ownerContact,
            locationAddress,
            userName,
            email,
            password,
        } = req.body
        let existingLandOwner = await LandOwner.findOne({ email })
        if (existingLandOwner) {
            return res.status(400).json({ error: "Land owner already exists" })
        }
        const newLandOwner = new LandOwner({
            latitude,
            longitude,
            totalSpaceAvailable,
            ownerName,
            ownerContact,
            locationAddress,
            userName,
            email,
            password,
        })
        const salt = await bcrypt.genSalt(10)
        newLandOwner.password = await bcrypt.hash(password, salt)
        await newLandOwner.save()
        const payload = {
            landOwner: {
                id: newLandOwner.id,
            },
        }
        jwt.sign(payload, "secret", (err, token) => {
            if (err) throw err
            res.json({ token })
        })
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
            landOwner: {
                id: existingLandOwner.id,
            },
        }
        jwt.sign(payload, "secret", (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (error) {
        console.error("Error logging in land owner:", error)
        res.status(500).json({ error: "Failed to log in land owner" })
    }
}

module.exports = {
    login,
    register,
}
