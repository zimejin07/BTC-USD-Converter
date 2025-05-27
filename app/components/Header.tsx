"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 bg-black/50 backdrop-blur-lg border-b border-white/10 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-black text-xs font-bold shadow-md">
          ₿
        </div>
        <span className="text-white text-sm font-semibold tracking-wide">
          BTC Wallet
        </span>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-5 text-white text-xl">
        <button className="hover:text-accent transition">
          <i className="fas fa-bell" />
        </button>
        <button className="hover:text-accent transition">
          <i className="fas fa-user-circle" />
        </button>
      </div>
    </header>
  );
}
