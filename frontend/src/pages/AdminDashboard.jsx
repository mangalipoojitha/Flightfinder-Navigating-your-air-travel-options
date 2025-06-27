import React, { useEffect, useState } from 'react';
import API from '../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    API.get('/admin/users', { headers: { Authorization: `Bearer ${token}` } }).then(res => setUsers(res.data));
    API.get('/admin/bookings', { headers: { Authorization: `Bearer ${token}` } }).then(res => setBookings(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <h3>All Users</h3>
      {users.map(u => (
        <div key={u._id}>{u.name} - {u.email}</div>
      ))}

      <h3>All Bookings</h3>
      {bookings.map(b => (
        <div key={b._id}>
          <p>User: {b.userId?.name}</p>
          <p>Flight: {b.flightId?.airline} - {b.flightId?.departure} → {b.flightId?.destination}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
