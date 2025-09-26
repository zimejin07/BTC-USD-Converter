"use client";
import { formatUSD, formatBTC } from "@/app/lib/formatters";
// import { formatUSD, formatBTC, formatNumber } from "@/app/lib/formatters";

const data = {
  high: 34151.41,
  low: 30988.9,
  volume: 39461.87,
  cap: 630987987224.18,
  history: {
    "1h": -3.48,
    "24h": 3.82,
    "7d": 4.84,
    "30d": 3.88,
    "1y": 42.68,
  },
};

export default function MarketData() {
  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-inner space-y-5">
      <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide">
        Market Data
      </h3>

      <div className="divide-y divide-white/10 text-sm font-mono text-white/90">
        <Row label="24h High" value={formatUSD(data.high)} />
        <Row label="24h Low" value={formatUSD(data.low)} />
        <Row label="24h Volume" value={formatBTC(data.volume)} />
        <Row label="Market Cap" value={formatUSD(data.cap)} />
      </div>

      <div className="pt-4">
        <h4 className="text-xs text-gray-500 mb-1 tracking-widest uppercase">
          Price History
        </h4>
        <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono text-white">
          {Object.entries(data.history).map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 items-center">
              <span className="text-white/60">{k}</span>
              <span
                className={`${
                  v >= 0 ? "text-green-400" : "text-red-400"
                } font-semibold`}
              >
                {v > 0 ? "+" : ""}
                {v.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-white/50">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}
