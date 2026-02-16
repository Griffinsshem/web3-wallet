"use client";

import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/connect-wallet";
import { useEthBalance } from "@/hooks/useEthBalance";
import { useUsdtBalance } from "@/hooks/useUsdtBalance";
import { useChainId } from "wagmi";
import Link from "next/link";
import {
  Wallet,
  ArrowRight,
  AlertTriangle,
  Loader2,
  Coins,
  Landmark,
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chainId = useChainId();
  const isMainnet = chainId === 1;

  const { balance, isLoading, isError, isConnected } = useEthBalance();

  const {
    balance: usdtBalance,
    isLoading: usdtLoading,
    isError: usdtError,
  } = useUsdtBalance();

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
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] dark:from-[#0f0f0f] dark:via-[#111111] dark:to-[#1a1a1a] transition-colors duration-500">

      <div className="w-full max-w-md rounded-3xl bg-white/60 dark:bg-[#1c1c1c]/80 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40 dark:border-[#2a2a2a] transition-colors duration-500">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f1f1f] text-white dark:bg-white dark:text-black transition-colors duration-500">
            <Wallet className="h-6 w-6" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[#1f1f1f] dark:text-white transition-colors duration-500">
            Web3 Wallet Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#5c5c5c] dark:text-gray-400 transition-colors duration-500">
            Connect your wallet to securely view balances
          </p>
        </div>

        {/* Connect */}
        <div className="mt-8 flex justify-center">
          <ConnectWallet />
        </div>

        {/* Dashboard Link */}
        <div className="mt-6 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1f] dark:text-white hover:opacity-70 transition"
          >
            Go to Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Balance Section */}
        <div className="mt-10 space-y-5 border-t border-[#d6d1c7] dark:border-[#2a2a2a] pt-6 transition-colors duration-500">

          {/* Wrong Network */}
          {isConnected && !isMainnet && (
            <div className="flex items-start gap-3 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 p-4 text-sm text-yellow-800 dark:text-yellow-300 transition-colors duration-500">
              <AlertTriangle className="h-5 w-5 mt-0.5" />
              <span>
                Please switch to Ethereum Mainnet to view balances.
              </span>
            </div>
          )}

          {/* Mainnet Balances */}
          {isConnected && isMainnet && (
            <>
              {/* ETH */}
              <div className="flex items-center justify-between rounded-xl bg-white/50 dark:bg-[#242424] px-4 py-3 border border-white/40 dark:border-[#2a2a2a] transition-colors duration-500">
                <div className="flex items-center gap-2 text-sm text-[#6b6b6b] dark:text-gray-400">
                  <Landmark className="h-4 w-4" />
                  ETH Balance
                </div>

                <span className="text-base font-semibold text-[#1f1f1f] dark:text-white">
                  {isLoading ? (
                    <span className="flex items-center gap-1">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading
                    </span>
                  ) : isError ? (
                    "Error"
                  ) : (
                    `${balance} ETH`
                  )}
                </span>
              </div>

              {/* USDT */}
              <div className="flex items-center justify-between rounded-xl bg-white/50 dark:bg-[#242424] px-4 py-3 border border-white/40 dark:border-[#2a2a2a] transition-colors duration-500">
                <div className="flex items-center gap-2 text-sm text-[#6b6b6b] dark:text-gray-400">
                  <Coins className="h-4 w-4" />
                  USDT Balance
                </div>

                <span className="text-base font-semibold text-[#1f1f1f] dark:text-white">
                  {usdtLoading ? (
                    <span className="flex items-center gap-1">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading
                    </span>
                  ) : usdtError ? (
                    "Error"
                  ) : usdtBalance !== null ? (
                    `${usdtBalance} USDT`
                  ) : (
                    "0 USDT"
                  )}
                </span>
              </div>
            </>
          )}

          {/* Not Connected */}
          {!isConnected && (
            <div className="flex items-center justify-center gap-2 text-sm text-[#6b6b6b] dark:text-gray-400">
              <Wallet className="h-4 w-4" />
              Connect wallet to view balances
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
