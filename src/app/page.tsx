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
  const { isConnected, address } = useAccount();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <Loader2 className="h-6 w-6 animate-spin text-white" />
      </main>
    );
  }

  return (
    <main
      className="
      relative min-h-screen flex flex-col
      bg-gradient-to-br
      from-indigo-200 via-purple-200 to-pink-200
      dark:from-[#0b0b0f] dark:via-[#111118] dark:to-[#1a1a22]
      animated-gradient
      transition-colors duration-700
      overflow-hidden
    "
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className="
        w-full flex items-center justify-between
        px-8 py-6
        backdrop-blur-xl
        bg-white/40 dark:bg-white/5
        border-b border-white/30 dark:border-white/10
      "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black shadow-md">
            <Wallet className="h-5 w-5" />
          </div>

          <span className="text-lg font-semibold tracking-tight text-[#1f1f1f] dark:text-white">
            CryptoDash
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {isConnected && (
            <div className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30">
              Connected
            </div>
          )}

          <ThemeToggle />
        </div>
      </nav>

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl dark:bg-purple-600/20 animate-pulse" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative flex flex-1 items-center justify-center px-6 py-20">

        {/* DISCONNECTED STATE */}
        {!isConnected && (
          <div
            className="
            w-full max-w-md
            rounded-3xl
            bg-white/60 dark:bg-[#1c1c1c]/80
            backdrop-blur-2xl
            border border-white/40 dark:border-white/10
            p-10
            shadow-[0_25px_100px_rgba(0,0,0,0.25)]
            transition-all duration-500
          "
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black shadow-lg">
                <Wallet className="h-7 w-7" />
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-[#1f1f1f] dark:text-white">
                Welcome to CryptoDash
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-[#5c5c5c] dark:text-gray-400">
                Connect your wallet to access your Web3 dashboard,
                balances, and network insights securely.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <ConnectWallet />
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#6b6b6b] dark:text-gray-500">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" />
                Non-custodial
              </div>

              <div className="flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                Secure & Encrypted
              </div>
            </div>
          </div>
        )}

        {/* CONNECTED DASHBOARD */}
        {isConnected && (
          <div className="w-full flex justify-center">
            <DashboardSection />
          </div>
        )}
      </div>
    </main>
  );
}
