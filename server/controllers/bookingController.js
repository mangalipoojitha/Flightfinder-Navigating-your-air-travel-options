const Booking = require('../models/Booking');
exports.bookFlight = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user.id,
      ...req.body
    });

    res.status(201).json({ msg: 'Booking successful', booking });
  } catch (error) {
    res.status(500).json({ msg: 'Booking failed' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('flightId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ msg: 'Could not fetch bookings' });
  }
};
