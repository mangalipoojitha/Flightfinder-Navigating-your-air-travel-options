const User = require('../models/User');
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email, role: 'admin' });
    if (!admin) return res.status(400).json({ msg: 'Admin not found' });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { id: admin._id, name: admin.name, role: admin.role } });
  } catch (error) {
    res.status(500).json({ msg: 'Admin login failed' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' });
    res.json(users);
  } catch (error) {
    res.status(500).json({ msg: 'Failed to get users' });
  }
};
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId flightId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ msg: 'Failed to get bookings' });
  }
};
