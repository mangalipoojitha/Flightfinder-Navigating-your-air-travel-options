const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true
  },

  departure: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  returnDate: {
    type: Date
  },

  class: {
    type: String,
    enum: ['economy', 'business'],
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  duration: {
    type: String
  },

  stops: {
    type: Number,
    default: 0
  },

  seatsAvailable: {
    type: Number,
    default: 50
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
