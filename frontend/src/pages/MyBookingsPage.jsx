import React, { useEffect, useState } from 'react';
import API from '../services/api';

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get('/bookings/my', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(res => setBookings(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Bookings</h2>
      {bookings.map(b => (
        <div key={b._id} style={{ border: '1px solid gray', marginBottom: 10, padding: 10 }}>
          <p><b>Flight:</b> {b.flightId?.airline}</p>
          <p><b>From:</b> {b.flightId?.departure} → <b>To:</b> {b.flightId?.destination}</p>
          <p><b>Passengers:</b> {b.passengers} | <b>Seat:</b> {b.seat || 'Any'} | <b>Total:</b> ₹{b.totalAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
