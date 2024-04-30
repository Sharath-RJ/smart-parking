const Device = require('../models/device')
const Property = require('../models/properties')

const addDevice = async (req, res) => {
    try {
        const { label, propertyId } = req.body
        const newDevice = new Device({
            label,
            propertyId
        })
        const savedDevice = await newDevice.save()
        await Property.findByIdAndUpdate(propertyId, { $push: { devices: savedDevice._id } })
        res.status(201).json({ success: true, device: savedDevice })
    } catch (error) {
        console.error("Error adding device:", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

const getDevicesByProperty = async()=> {
    try{
        const properyId = req.body.propertyId
        const devices = await Device.find({propertyId:properyId})
        res.status(200).json({success:true, devices})
    }catch(error){
        console.error("Error fetching devices:", error)
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