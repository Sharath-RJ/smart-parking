const express = require("express")
const router = express.Router()
const userController= require("../controllers/userController") 

router.get("/update/parking-status")
router.get("/parking-slots")


module.exports = router