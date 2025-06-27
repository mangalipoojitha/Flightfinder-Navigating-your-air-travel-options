const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getAllUsers,
  getAllBookings
} = require('../controllers/adminController');

const { protect, adminOnly } = require('../middlewares/authMiddleware');
router.post('/login', loginAdmin);
router.get('/users', protect, adminOnly, getAllUsers);
router.get('/bookings', protect, adminOnly, getAllBookings);

module.exports = router;
