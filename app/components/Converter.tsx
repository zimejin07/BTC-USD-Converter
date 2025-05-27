"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SwapSuccessModal from "./converter/SwapSuccessModal";
import { useConversion } from "./converter/useConversion";

export default function Converter() {
  const { btcPrice, currency, amount, converted, setAmount, toggleCurrency } =
    useConversion();

  const [successVisible, setSuccessVisible] = useState(false);

  const handleSwap = () => {
    if (!amount || amount <= 0) {
      toast.error("Enter a valid amount");
      return;
    }
    toggleCurrency();
    setAmount(Number(converted));
  };

  const confirmSwap = () => {
    if (!amount || amount <= 0) {
      toast.error("Enter a valid amount");
      return;
    }
    setSuccessVisible(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg space-y-6"
      >
        {/* Price Display */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">Current Price</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              $
              {btcPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-green-400">↑ Rising</div>
          </div>
        </div>

        {/* Input Box */}
        <div className="bg-black/20 rounded-xl border border-white/10 p-4 space-y-3 relative overflow-hidden">
          <label className="text-xs text-gray-400">Amount</label>
          <input
            type="number"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-transparent text-white placeholder-white/20 text-xl font-mono outline-none"
            placeholder="0.00"
          />
          <div className="absolute top-3 right-4 text-xs text-white/50">
            {currency.toUpperCase()}
          </div>
        </div>

        {/* Swap Toggle */}
        <motion.button
          onClick={handleSwap}
          whileTap={{ scale: 0.85, rotate: 180 }}
          whileHover={{ scale: 1.05 }}
          className="mx-auto flex items-center justify-center bg-white/5 border border-white/10 w-10 h-10 rounded-full text-white text-lg shadow-inner"
        >
          ↻
        </motion.button>

        {/* Output Box */}
        <div className="bg-black/20 rounded-xl border border-white/10 p-4 space-y-2 relative">
          <label className="text-xs text-gray-400">Converted</label>
          <div className="text-white font-mono text-xl">
            {converted}
            <span className="text-white/40 text-sm ml-2">
              {currency === "btc" ? "USD" : "BTC"}
            </span>
          </div>
        </div>

        {/* Confirm Button */}
        <motion.button
          onClick={confirmSwap}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold text-white shadow-md"
        >
          Confirm Swap
        </motion.button>
      </motion.div>

      {/* Success Modal */}
      <SwapSuccessModal
        show={successVisible}
        onClose={() => setSuccessVisible(false)}
      />
    </>
  );
}
