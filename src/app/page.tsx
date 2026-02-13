"use client";

import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/connect-wallet";
import { useEthBalance } from "@/hooks/useEthBalance";
import { useUsdtBalance } from "@/hooks/useUsdtBalance";

export default function Home() {
  // 🔹 Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { balance, isLoading, isError, isConnected } = useEthBalance();

  const {
    balance: usdtBalance,
    isLoading: usdtLoading,
    isError: usdtError,
  } = useUsdtBalance();

  console.log("USDT:", usdtBalance, usdtLoading, usdtError);

  // 🔹 During SSR + first client render
  if (!mounted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc]">
        <div className="text-sm text-[#5c5c5c]">Loading...</div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/60 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-[#1f1f1f]">
          Web3 Wallet Dashboard
        </h1>

        <p className="mt-2 text-center text-sm text-[#5c5c5c]">
          Connect your wallet to securely view balances
        </p>

        <div className="mt-8 flex justify-center">
          <ConnectWallet />
        </div>

        {/* Balance Section */}
        <div className="mt-10 space-y-5 border-t border-[#d6d1c7] pt-6">
          {/* ETH */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6b6b6b]">ETH Balance</span>

            <span className="text-base font-semibold text-[#1f1f1f]">
              {!isConnected
                ? "—"
                : isLoading
                  ? "Loading..."
                  : isError
                    ? "Error"
                    : `${balance} ETH`}
            </span>
          </div>

          {/* USDT */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6b6b6b]">USDT Balance</span>

            <span className="text-base font-semibold text-[#1f1f1f]">
              {!isConnected
                ? "—"
                : usdtLoading
                  ? "Loading..."
                  : usdtError
                    ? "Error"
                    : usdtBalance !== null
                      ? `${usdtBalance} USDT`
                      : "0 USDT"}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
