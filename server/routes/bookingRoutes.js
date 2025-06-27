const express = require('express');
const router = express.Router();
const {
  bookFlight,
  getUserBookings
} = require('../controllers/bookingController');

const { protect } = require('../middlewares/authMiddleware');
router.post('/', protect, bookFlight);
router.get('/my', protect, getUserBookings);

module.exports = router;
