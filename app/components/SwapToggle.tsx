"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SwapToggle() {
  const [active, setActive] = useState("Withdraw");
  return (
    <div className="relative bg-white/10 rounded-full p-1 flex justify-between border border-white/10">
      {["Withdraw", "Deposit"].map((label, i) => (
        <button
          key={label + i}
          onClick={() => setActive(label)}
          className={`relative z-10 w-1/2 text-sm font-semibold py-2 rounded-full transition-all ${
            active === label ? "text-white" : "text-gray-400"
          }`}
        >
          {label}
        </button>
      ))}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-0"
        style={{
          left: active === "Withdraw" ? "4px" : "50%",
        }}
      />
    </div>
  );
}
