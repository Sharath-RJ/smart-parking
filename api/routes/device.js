const { addDevice, getDevicesByProperty } = require('../controllers/device')
const { isAuth } = require('../middlewares/isAuth')

const router = require('express').Router()

router.post('/addDevice', isAuth, addDevice)
router.get('/getDevicesByProperty', isAuth, getDevicesByProperty)

module.exports = router