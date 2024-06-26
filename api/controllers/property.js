const Property = require("../models/properties")
const Device= require("../models/device")

const getPropertiesByUser = async (req, res) => {
    try {
        const userId = req.landOwner._id // Assuming userId is passed as a parameter
        const properties = await Property.find({ userId })
        res.status(200).json({ success: true, properties })
    } catch (error) {
        console.error("Error fetching properties:", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

const addProperty = async (req, res) => {
    try {
        const { name ,spaceType, spaceAvailable, longitude, latitude } = req.body
        const newProperty = new Property({ userId:req.landOwner._id, 
            userId:req.landOwner._id,
            name, spaceType, 
            spaceAvailable, 
            location:{
                type:"Point",
                coordinates:[longitude, latitude]
            }  
        })
        const savedProperty = await newProperty.save()
        res.status(201).json({ success: true, property: savedProperty })
    } catch (error) {
        console.error("Error adding property:", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

const deleteProperty = async (req, res) => {
    try {
        const propertyId = req.params.propertyId // Assuming propertyId is passed as a parameter
        await Property.findByIdAndDelete(propertyId)
        res.status(200).json({
            success: true,
            message: "Property deleted successfully",
        })
    } catch (error) {
        console.error("Error deleting property:", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}
const getPropertyAndDevices = async (req, res) => {
   try {
    const propertyDevicesMap={}
      const properties = await Property.find();
      const propertiesWithDevices = await Promise.all(properties.map(async (property) => {
         const devices = await Device.find({ propertyId: property._id });
         propertyDevicesMap[property._id] = devices;
      }));
      res.status(200).json({
         success: true,
         properties: propertiesWithDevices
      });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
         success: false,
         message: "Internal server error",
      });
   }
}
module.exports = {
    getPropertiesByUser,
    addProperty,
    deleteProperty,
    getPropertyAndDevices,
}
