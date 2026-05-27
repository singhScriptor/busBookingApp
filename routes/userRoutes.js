const express = require('express')
const router = express.Router()

const controlUser = require('../controller/userController')
const controlBooking=require('../controller/bookingController')

router.post('/',controlUser.postUser)
router.get('/:id',controlUser.getUser)

router.get('/:id/bookings',controlBooking.getBookingByUser)

module.exports =router