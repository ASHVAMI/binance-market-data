# Binance Market Data WebSocket Implementation

This project is a **React-based web application** that connects to the Binance WebSocket API to visualize real-time candlestick data for selected cryptocurrencies. Users can toggle between different coins (ETH/USDT, BNB/USDT, DOT/USDT) and time intervals (1-minute, 3-minute, 5-minute) while maintaining previous chart data. The chart is built using **Chart.js**, and the WebSocket integration provides live updates of market data.

## Features

1. **WebSocket Connection to Binance**: 
   - Connect to Binance WebSocket for live market data.
   - Uses WebSocket URL format: `wss://stream.binance.com:9443/ws/<symbol>@kline_<interval>`.
   
2. **Cryptocurrency Toggle**:
   - Users can toggle between three coins: ETH/USDT, BNB/USDT, and DOT/USDT.
   - Previous chart data is retained when switching between coins.

3. **Candlestick Chart Visualization**:
   - Display live candlestick charts for selected cryptocurrencies using **Chart.js**.
   - Smooth chart updates without flickering.

4. **Timeframe Selector**:
   - Users can select time intervals for the chart: 1 minute, 3 minutes, and 5 minutes.

5. **Data Persistence**:
   - Uses **localStorage** to store candlestick data for each coin, so chart data persists after switching coins.

6. **Responsive UI**:
   - Clean and user-friendly interface for toggling between cryptocurrencies and time intervals.
   - Real-time updates with smooth rendering.


## Installation

cd binance-market-data

Install dependencies:
npm install

Start the development server:
npm start

The app will be available at http://localhost:3000.

How It Works:
WebSocket Connection:

1. The app connects to Binance WebSocket using the URL format wss://stream.binance.com:9443/ws/<symbol>@kline_<interval>.
2. The WebSocket receives candlestick (kline) data in real-time and updates the chart accordingly.

Coin and Interval Selection:

1. The user can select different coins (ETH/USDT, BNB/USDT, DOT/USDT) and time intervals (1m, 3m, 5m) using dropdowns.
2. The selected coin and interval determine the WebSocket URL.

Data Persistence:

1. localStorage is used to persist chart data for each coin so the user can switch back and forth without losing the chart data.

Chart Rendering:

1. The Chart.js library is used to render a live candlestick chart.
2. The chart smoothly updates with new WebSocket data without flickering.

Technologies Used:

1. React.js: Frontend framework for building the UI.
2. WebSocket: Used to receive live market data from Binance.
3. Chart.js: Library for creating candlestick charts.
4. localStorage: To store and persist chart data.
5. CSS: For styling the user interface.

Future Enhancements:

1. Add more cryptocurrencies and intervals.
2. Implement a custom design for the chart to enhance the user experience.
3. Provide an option for users to select custom time intervals.
4. Add error handling for WebSocket connection failures.


This `README.md` provides clear instructions on how to set up and run the project, as well as an explanation of its functionality and technology stack.


Thank you.........










