"use client";

const tokens = [
  { name: "Cardano", symbol: "ADA", amount: 67.5, price: 2.76 },
  { name: "HEX Token", symbol: "HEX", amount: 7.8, price: 4.05 },
  { name: "Ocean Protocol", symbol: "OCEAN", amount: 3.9, price: 2.19 },
];

export default function PortfolioCard() {
  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-inner p-5 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide">
            Assets
          </h3>
          <p className="text-xs text-white/40 mt-1">
            Portfolio Total:{" "}
            <span className="text-white font-bold">$156.24</span>
          </p>
        </div>
        <button className="text-xs text-gray-400 hover:text-white">
          + Add Token
        </button>
      </div>

      <div className="divide-y divide-white/10">
        {tokens.map((t) => (
          <div
            key={t.symbol}
            className="py-3 flex justify-between items-center text-sm font-mono text-white"
          >
            <div>
              <p className="text-white font-medium">{t.symbol}</p>
              <p className="text-xs text-white/40">{t.name}</p>
            </div>
            <div className="text-right">
              <p>{t.amount.toFixed(2)}</p>
              <p className="text-xs text-white/40">
                ${(t.amount * t.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
