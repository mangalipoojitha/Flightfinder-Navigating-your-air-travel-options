const Flight = require('../models/Flight');
exports.getFlights = async (req, res) => {
  try {
    const { from, to, date } = req.query;
    const query = {};

    if (from) query.departure = from;
    if (to) query.destination = to;
    if (date) query.date = new Date(date);

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching flights' });
  }
};

exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ msg: 'Failed to add flight' });
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const { id } = req.params;
    await Flight.findByIdAndDelete(id);
    res.json({ msg: 'Flight deleted' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to delete flight' });
  }
};
