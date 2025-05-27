'use client'

export default function ChartCard() {
  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-inner flex flex-col space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase text-white/40">Asset</p>
          <h3 className="text-xl font-bold text-white">Cardano (ADA)</h3>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/40">Volume</p>
          <p className="text-sm font-mono text-white">3.6M</p>
        </div>
      </div>

      {/* Fake Chart Image */}
      <div className="w-full h-[80px] bg-gradient-to-t from-purple-500/10 via-pink-500/10 to-transparent rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chart-line.svg')] bg-no-repeat bg-center bg-contain opacity-90" />
      </div>

      <div className="flex justify-between items-center pt-2 text-sm">
        <div>
          <p className="text-white/40">Price</p>
          <p className="font-mono text-white text-base">$0.4190</p>
        </div>
        <div>
          <p className="text-green-400 font-bold text-sm">+12.1%</p>
        </div>
      </div>
    </div>
  )
}
