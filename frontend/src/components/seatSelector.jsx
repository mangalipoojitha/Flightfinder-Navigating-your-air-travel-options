import React, { useState } from 'react';

const SeatSelector = ({ totalSeats = 50, selectedSeat, setSelectedSeat }) => {
  const seats = Array.from({ length: totalSeats }, (_, i) => `Seat ${i + 1}`);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {seats.map(seat => (
        <button
          key={seat}
          onClick={() => setSelectedSeat(seat)}
          style={{
            padding: '6px 12px',
            backgroundColor: selectedSeat === seat ? '#28a745' : '#ccc',
            border: '1px solid #888'
          }}
        >
          {seat}
        </button>
      ))}
    </div>
  );
};

export default SeatSelector;
