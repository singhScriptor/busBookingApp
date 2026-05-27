const express = require('express')
const router = express.Router()

const controlBus = require('../controller/busController')

const bookingControl = require('../controller/bookingController')

router.post('/',controlBus.postBus)
router.get('/:id',controlBus.getBus)

router.get('/:id/bookings',bookingControl.getBookingByBus)

module.exports = router