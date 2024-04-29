const Device = require('../models/device')

const getDevicesByProperty = async (req, res) => {
    try {

    }catch(error){
        res.status(500).json({success:false, message:"Internal server error"})
    }
}

const addDevice = async (req, res) => {
    
}

module.exports = {
    getDevicesByProperty
}