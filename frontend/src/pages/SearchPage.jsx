import React, { useState, useEffect } from 'react';
import API from '../services/api';
import FlightCard from '../components/FlightCard';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [flights, setFlights] = useState([]);
  const [query, setQuery] = useState({ from: '', to: '', date: '' });
  const navigate = useNavigate();

  const searchFlights = async () => {
    const res = await API.get(`/flights?from=${query.from}&to=${query.to}&date=${query.date}`);
    setFlights(res.data);
  };

  const handleInput = e => setQuery({ ...query, [e.target.name]: e.target.value });

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Flights</h2>
      <input name="from" placeholder="From" onChange={handleInput} />
      <input name="to" placeholder="To" onChange={handleInput} />
      <input name="date" type="date" onChange={handleInput} />
      <button onClick={searchFlights}>Search</button>

      <hr />
      {flights.map(flight => (
        <FlightCard key={flight._id} flight={flight} onBook={() => navigate(`/book/${flight._id}`)} />
      ))}
    </div>
  );
};

export default SearchPage;
