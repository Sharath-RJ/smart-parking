const Property = require('../models/properties')
const Device = require('../models/device')
const getAllLocation = async(req, res)=>{
    try{
        const properties = await Property.find({}).select('devices name spaceType spaceAvailable _id location').populate({
            path:'devices',
            select:'status',
        })
        res.status(200).json({
            success:true,
            locations:properties
        })
    }catch(error){
        console.log(error);
        res.status(500).json({success:false})
    }
}



module.exports = {
    getAllLocation
}