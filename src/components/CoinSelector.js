import React from 'react';

function CoinSelector({ coins, selectedCoin, setCoin }) {
  return (
    <div>
      <label>Select Coin: </label>
      <select value={selectedCoin} onChange={(e) => setCoin(e.target.value)}>
        {coins.map((coin) => (
          <option key={coin} value={coin}>{coin}</option>
        ))}
      </select>
    </div>
  );
}

export default CoinSelector;
