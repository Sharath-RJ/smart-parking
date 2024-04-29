const express = require("express")
const router = express.Router()
const landOwnerController = require("../controllers/landOwnerController")
const { isAuth } = require("../middlewares/isAuth")

router.get("/get-landOwner", isAuth, landOwnerController.getLandOwner)
router.post("/login", )
router.post("/register")

module.exports = router
