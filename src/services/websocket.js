export function connectToWebSocket(coin, interval, onMessage) {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coin}@kline_${interval}`);
    
    ws.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      if (messageData.k) {
        const candlestick = {
          t: messageData.k.t,
          o: messageData.k.o,
          h: messageData.k.h,
          l: messageData.k.l,
          c: messageData.k.c
        };
        onMessage(candlestick);
      }
    };
  
    return ws;
  }
  
  export function closeWebSocket(ws) {
    if (ws) ws.close();
  }
  