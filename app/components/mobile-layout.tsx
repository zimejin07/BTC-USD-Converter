"use client";

import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import BottomNav from "./BottomNav";

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-2 py-6">
      <div className="relative w-full max-w-md mx-auto bg-[#121212] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between min-h-[90vh]">
        <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[300px] h-[300px] bg-pink-400 opacity-10 rounded-full blur-[100px] -z-10" />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            className:
              "bg-[#1f1f2b] text-white shadow-md rounded-xl text-sm px-4 py-2 border border-white/10",
          }}
        />
        <div className="flex-grow flex flex-col overflow-y-auto">
          {children}
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
