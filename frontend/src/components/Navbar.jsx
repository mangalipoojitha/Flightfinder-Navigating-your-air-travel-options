import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
      <Link to="/" style={{ color: 'white', marginRight: 10 }}>Home</Link>
      <Link to="/search" style={{ color: 'white', marginRight: 10 }}>Search Flights</Link>
      {isLoggedIn ? (
        <>
          <Link to="/my-bookings" style={{ color: 'white', marginRight: 10 }}>My Bookings</Link>
          <button onClick={logout} style={{ background: 'transparent', border: 'none', color: 'white' }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: 'white', marginRight: 10 }}>Login</Link>
          <Link to="/register" style={{ color: 'white' }}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
