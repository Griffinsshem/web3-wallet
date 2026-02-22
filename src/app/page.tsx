"use client";

import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/connect-wallet";
import DashboardSection from "@/components/DashboardSection";
import { useAccount } from "wagmi";
import { ThemeToggle } from "@/components/theme-toggle";
import { Loader2, TrendingUp } from "lucide-react";
import { CryptoTicker } from "@/components/crypto-ticker";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] dark:from-[#0f0f0f] dark:via-[#111111] dark:to-[#1a1a1a] transition-colors duration-500">
        <div className="flex items-center gap-2 text-sm tracking-wide text-[#5c5c5c] dark:text-gray-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main
      className="
        relative min-h-screen
        bg-gradient-to-br
        from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc]
        dark:from-[#0f0f0f] dark:via-[#111111] dark:to-[#1a1a1a]
        transition-colors duration-500
      "
    >
      {/* Decorative Glow Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />
      </div>

      {/* Main Layout */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">

        {/* Responsive Grid */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Column — Wallet */}
          <div className="flex justify-center lg:justify-start">
            <ConnectWallet />
          </div>

          {/* Right Column — Market Preview (Only When Disconnected) */}
          {!isConnected && (
            <div className="space-y-6">

              <div>
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <TrendingUp className="h-4 w-4" />
                  Live Market Overview
                </div>

                <h2 className="mt-3 text-3xl font-semibold text-[#1f1f1f] dark:text-white">
                  Track Popular Crypto Assets
                </h2>

                <p className="mt-2 text-sm text-[#5c5c5c] dark:text-gray-400">
                  Real-time token prices updating automatically every few seconds.
                </p>
              </div>

              <div className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-[#1c1c1c]/70 p-6 backdrop-blur-xl shadow-xl">
                <CryptoTicker />
              </div>

            </div>
          )}
        </div>
      </div>

      {/* Dashboard Section — Only When Connected */}
      {isConnected && (
        <div className="mx-auto w-full max-w-6xl px-6 pb-20">
          <DashboardSection />
        </div>
      )}

      <ThemeToggle />
    </main>
  );
}