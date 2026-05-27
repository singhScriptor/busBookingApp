const express = require('express')
const router = express.Router()

const bookingControl = require('../controller/bookingController')

router.post('/',bookingControl.postBooking)
router.get('/:id',bookingControl.getBooking)


module.exports = router