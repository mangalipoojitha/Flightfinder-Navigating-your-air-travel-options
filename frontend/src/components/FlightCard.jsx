import React from 'react';

const FlightCard = ({ flight, onBook }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 10 }}>
      <h3>{flight.airline}</h3>
      <p>{flight.departure} → {flight.destination}</p>
      <p>Class: {flight.class} | Price: ₹{flight.price}</p>
      <p>Date: {new Date(flight.date).toLocaleDateString()}</p>
      <button onClick={() => onBook(flight)}>Book</button>
    </div>
  );
};

export default FlightCard;
