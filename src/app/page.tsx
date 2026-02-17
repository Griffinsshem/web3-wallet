"use client";

import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/connect-wallet";
import DashboardSection from "@/components/DashboardSection";
import { useAccount } from "wagmi";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wallet, Loader2 } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] dark:from-[#0f0f0f] dark:via-[#111111] dark:to-[#1a1a1a]">
        <div className="flex items-center gap-2 text-sm text-[#5c5c5c] dark:text-gray-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center px-6 py-20 
      bg-gradient-to-br 
      from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] 
      dark:from-[#0f0f0f] dark:via-[#111111] dark:to-[#1a1a1a] 
      transition-colors duration-500">

      {/* Landing Card */}
      <div className="w-full max-w-md rounded-3xl bg-white/60 dark:bg-[#1c1c1c]/80 p-10 
        shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
        backdrop-blur-xl 
        border border-white/40 dark:border-[#2a2a2a] 
        transition-colors duration-500">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl 
            bg-[#1f1f1f] text-white 
            dark:bg-white dark:text-black 
            transition-colors duration-500">
            <Wallet className="h-6 w-6" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight 
            text-[#1f1f1f] dark:text-white 
            transition-colors duration-500">
            Welcome to Your CryptoDash
          </h1>

          <p className="mt-2 text-sm 
            text-[#5c5c5c] dark:text-gray-400 
            transition-colors duration-500">
            Connect your wallet to securely view balances
          </p>
        </div>

        {/* Connect Button */}
        <div className="mt-8 flex justify-center">
          <ConnectWallet />
        </div>

      </div>

      {/* Dashboard Section — Only When Connected */}
      {isConnected && (
        <div className="w-full flex justify-center">
          <DashboardSection />
        </div>
      )}

      {/* Theme Toggle */}
      <ThemeToggle />
    </main>
  );
}
