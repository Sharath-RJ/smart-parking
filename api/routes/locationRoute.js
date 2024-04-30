const router = require('express').Router()
const {getAllLocation} = require('../controllers/locationController')

router.get('/', getAllLocation)

module.exports = router