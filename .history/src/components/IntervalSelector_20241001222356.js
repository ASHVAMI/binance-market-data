import React from 'react';

function IntervalSelector({ intervals, selectedInterval, setInterval }) {
  return (
    <div>
      <label>Select Time Interval: </label>
      <select value={selectedInterval} onChange={(e) => setInterval(e.target.value)}>
        {intervals.map((interval) => (
          <option key={interval} value={interval}>{interval}</option>
        ))}
      </select>
    </div>
  );
}

export default IntervalSelector;
