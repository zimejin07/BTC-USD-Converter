"use client";

import { useState } from "react";

const tabs = [
  { label: "Home", icon: "fas fa-home" },
  { label: "Swap", icon: "fas fa-retweet" },
  { label: "Portfolio", icon: "fas fa-wallet" },
  { label: "Settings", icon: "fas fa-cog" },
];

export default function BottomNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="relative z-50 px-3 pb-0">
      <div className="mx-auto w-full max-w-sm bg-black/70 backdrop-blur-lg border border-white/10 rounded-t-3xl shadow-2xl flex justify-between items-center px-5 py-3 space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`flex-1 flex flex-col items-center text-xs font-medium transition-all rounded-xl ${
              active === tab.label
                ? "text-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <div
              className={`text-lg ${
                active === tab.label ? "animate-glowPulse" : ""
              }`}
            >
              <i className={tab.icon} />
            </div>
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
