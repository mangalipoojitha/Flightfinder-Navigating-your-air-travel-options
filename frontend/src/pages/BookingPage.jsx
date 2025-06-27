import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const BookingPage = () => {
  const { flightId } = useParams();
  const [flight, setFlight] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [seat, setSeat] = useState('');

  useEffect(() => {
    API.get(`/flights?flightId=${flightId}`).then(res => {
      const found = res.data.find(f => f._id === flightId);
      setFlight(found);
    });
  }, [flightId]);

  const bookNow = async () => {
    try {
      const totalAmount = flight.price * passengers;
      await API.post('/bookings', { flightId, seat, passengers, totalAmount }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Booking confirmed!');
    } catch {
      alert('Booking failed');
    }
  };

  return flight ? (
    <div style={{ padding: 20 }}>
      <h2>Booking for {flight.airline}</h2>
      <p>{flight.departure} → {flight.destination}</p>
      <input type="number" value={passengers} onChange={e => setPassengers(+e.target.value)} min="1" />
      <input placeholder="Seat (optional)" value={seat} onChange={e => setSeat(e.target.value)} />
      <button onClick={bookNow}>Confirm Booking</button>
    </div>
  ) : (
    <p>Loading flight...</p>
  );
};

export default BookingPage;
