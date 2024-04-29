const express = require("express")
const router = express.Router()
const propertyController = require("../controllers/property")
const { isAuth } = require("../middlewares/isAuth")

router.get("/getProperty", isAuth, propertyController.getPropertiesByUser)
router.post("/addProperty", isAuth ,propertyController.addProperty)
module.exports = router
