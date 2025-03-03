import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function CandlestickChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [{
          label: 'Candlestick Data',
          data: data,
        }]
      }
    });
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
}

export default CandlestickChart;
