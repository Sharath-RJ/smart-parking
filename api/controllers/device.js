const Device = require('../models/device')

const getDevicesByProperty = async (req, res) => {
    try {
        const { propertyId } = req.params 
        const devices = await Device.find({ propertyId })
        if (devices.length > 0) {
            res.status(200).json({ success: true, devices })
        } else {
            res.status(404).json({
                success: false,
                message: "No devices found for the property",
            })
        }
    } catch (error) {
        console.error("Error fetching devices by property:", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

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