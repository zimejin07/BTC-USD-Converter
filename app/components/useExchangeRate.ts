'use client';

import { useEffect, useState } from 'react';

export function useExchangeRate() {
  const [btcPrice, setBtcPrice] = useState(30000);
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const update = () => {
      const newPrice = 25000 + Math.random() * 10000;
      setBtcPrice((prevPrice) => {
        setIsUp(newPrice >= prevPrice);
        return newPrice;
      });
    };

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []); // Removed btcPrice from dependency array

  return { btcPrice, isUp };
}
