const Device = require('../models/device')

const addDevice = async (req, res) => {
    try {
        const { status, label, propertyId } = req.body
        const newDevice = new Device({
            status,
            label,
            propertyId,
        })
        const savedDevice = await newDevice.save()
        res.status(201).json({ success: true, device: savedDevice })
    } catch (error) {
        console.error("Error adding device:", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

module.exports = {
    getDevicesByProperty,
    addDevice,
}