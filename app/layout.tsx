import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import MobileLayout from "./components/mobile-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitcoin Exchange | BTC to USD",
  description: "A premium BTC to USD exchange simulator with dark mode UI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} relative bg-[#0f0f14] text-white min-h-screen`}
      >
        {/* Background Glow Gradient Layers */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f14] via-black/80 to-[#0f0f14]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(192,132,252,0.1),_transparent_70%)] animate-glowPulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(236,72,153,0.1),_transparent_70%)] animate-glowPulse" />
        </div>

        {/* App Content inside Rounded Mobile Shell */}
        <MobileLayout>{children}</MobileLayout>
      </body>
    </html>
  );
}
