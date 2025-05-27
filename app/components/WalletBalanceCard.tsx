'use client'

import SwapToggle from './SwapToggle'

export default function WalletBalanceCard() {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/10">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm text-gray-400">Your Wallet</h2>
          <p className="text-2xl font-bold text-white">$40,278.00 <span className="text-sm text-gray-400">USDT</span></p>
        </div>
        <div className="flex space-x-2">
          <button className="text-white/70 hover:text-white">
            <i className="fas fa-qrcode text-lg" />
          </button>
          <button className="text-white/70 hover:text-white">
            <i className="fas fa-user-circle text-lg" />
          </button>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="mb-4">
        <SwapToggle />
      </div>

      {/* Staking Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Staking Tokens</span>
          <span>$32.7k</span>
        </div>
        <div className="bg-white/10 rounded-full h-2 overflow-hidden">
          <div className="h-full w-[65%] bg-gradient-to-r from-purple-500 to-pink-500 animate-pulseSoft" />
        </div>
      </div>
    </div>
  )
}
