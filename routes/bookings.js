// routes/bookings.js

const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingController');

router.post('/book', bookingsController.bookRoom);
router.get('/list', bookingsController.getAllBookings);
// Add more booking-related routes as needed

module.exports = router;
