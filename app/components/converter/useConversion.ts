"use client";

import { useEffect, useState } from "react";

export function useConversion(initialCurrency: "btc" | "usd" = "btc") {
  const [btcPrice, setBtcPrice] = useState(26710.82);
  const [currency, setCurrency] = useState<"btc" | "usd">(initialCurrency);
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState("");

  useEffect(() => {
    const result = currency === "btc" ? amount * btcPrice : amount / btcPrice;
    setConverted(result.toFixed(currency === "btc" ? 2 : 8));
  }, [amount, currency, btcPrice]);
  
  console.log('Error: 'setBtcPrice' is assigned a value but never used.', setBtcPrice)

  const toggleCurrency = () =>
    setCurrency((prev) => (prev === "btc" ? "usd" : "btc"));

  return {
    btcPrice,
    currency,
    amount,
    converted,
    setAmount,
    toggleCurrency,
  };
}
