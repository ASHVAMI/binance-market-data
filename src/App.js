import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import CoinSelector from './components/CoinSelector';
import IntervalSelector from './components/IntervalSelector';
import { connectToWebSocket, closeWebSocket } from './services/websocket';
import { getStoredData, storeData } from './utils/localStorageHelper';
import { COINS, TIME_INTERVALS } from './constants';

function App() {
  const [coin, setCoin] = useState(COINS[0]);
  const [interval, setInterval] = useState(TIME_INTERVALS[0]);
  const [chartData, setChartData] = useState(getStoredData(coin) || []);

  useEffect(() => {
    const ws = connectToWebSocket(coin, interval, (newData) => {
      setChartData((prevData) => {
        const updatedData = [...prevData, newData];
        storeData(coin, updatedData);
        return updatedData;
      });
    });
    return () => closeWebSocket(ws);
  }, [coin, interval]);

  return (
    <div>
      <CoinSelector coins={COINS} selectedCoin={coin} setCoin={setCoin} />
      <IntervalSelector intervals={TIME_INTERVALS} selectedInterval={interval} setInterval={setInterval} />
      <Chart data={chartData} />
    </div>
  );
}

export default App;
