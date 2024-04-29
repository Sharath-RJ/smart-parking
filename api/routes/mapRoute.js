const express = require("express")
const router = express.Router()
const mapController = require("../controllers/mapController")

router.get("/mapMark", mapController.renderMap)

module.exports = router
