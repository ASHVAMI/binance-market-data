export function getStoredData(coin) {
    const data = localStorage.getItem(coin);
    return data ? JSON.parse(data) : null;
  }
  
  export function storeData(coin, data) {
    localStorage.setItem(coin, JSON.stringify(data));
  }
  