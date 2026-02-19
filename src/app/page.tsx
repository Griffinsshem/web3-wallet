"use client";

import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/connect-wallet";
import DashboardSection from "@/components/DashboardSection";
import { useAccount } from "wagmi";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Wallet,
  ShieldCheck,
  Sparkles,
  Loader2,
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] dark:from-[#0b0b0b] dark:via-[#111111] dark:to-[#1a1a1a]">
        <div className="flex items-center gap-2 text-sm text-[#5c5c5c] dark:text-gray-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading CryptoDash...
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20
      bg-gradient-to-br
      from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc]
      dark:from-[#0b0b0b] dark:via-[#111111] dark:to-[#1a1a1a]
      transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      {!isConnected && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/20" />
        </div>
      )}

      {/* ================= DISCONNECTED STATE ================= */}
      {!isConnected && (
        <div
          className="relative w-full max-w-md rounded-3xl
          bg-white/60 dark:bg-[#1c1c1c]/80
          p-10
          shadow-[0_20px_80px_rgba(0,0,0,0.2)]
          backdrop-blur-2xl
          border border-white/40 dark:border-[#2a2a2a]
          transition-colors duration-500 animate-fadeUp"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl
              bg-[#1f1f1f] text-white
              dark:bg-white dark:text-black
              shadow-lg transition-colors duration-500"
            >
              <Wallet className="h-7 w-7" />
            </div>

            <h1
              className="text-3xl font-semibold tracking-tight
              text-[#1f1f1f] dark:text-white transition-colors duration-500"
            >
              CryptoDash
            </h1>

            <p
              className="mt-3 text-sm leading-relaxed
              text-[#5c5c5c] dark:text-gray-400
              transition-colors duration-500"
            >
              Securely connect your wallet to access balances,
              network data, and your Web3 portfolio overview.
            </p>
          </div>

          {/* Connect Button */}
          <div className="mt-8 flex justify-center">
            <ConnectWallet />
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#6b6b6b] dark:text-gray-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              Non-custodial
            </div>

            <div className="flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Powered by Ethereum
            </div>
          </div>
        </div>
      )}

      {/* ================= CONNECTED DASHBOARD ================= */}
      {isConnected && (
        <div className="w-full flex justify-center animate-fadeUp">
          <DashboardSection />
        </div>
      )}

      {/* Theme Toggle */}
      <ThemeToggle />
    </main>
  );
}
