const express = require('express');
const router = express.Router();
const {
  getFlights,
  createFlight,
  deleteFlight
} = require('../controllers/flightController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
router.get('/', getFlights);
router.post('/', protect, adminOnly, createFlight);
router.delete('/:id', protect, adminOnly, deleteFlight);

module.exports = router;
