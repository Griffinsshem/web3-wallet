"use client";

import { useAccount, useBalance } from "wagmi";
import { formatUnits } from "viem";
import {
  Wallet,
  Loader2,
  AlertCircle,
  Coins,
} from "lucide-react";

export default function BalanceCard() {
  const { address, isConnected } = useAccount();

  const {
    data: balance,
    isLoading,
    isError,
  } = useBalance({
    address,
    query: {
      enabled: !!address,
    },
  });

  return (
    <div
      className="p-6 rounded-2xl 
      bg-white/70 dark:bg-white/5
      backdrop-blur-xl
      border border-white/40 dark:border-white/10
      shadow-sm dark:shadow-lg
      space-y-5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-[#6b6b6b] dark:text-gray-400" />
        <h2 className="text-xl font-semibold text-[#1f1f1f] dark:text-white">
          Balance
        </h2>
      </div>

      {!isConnected ? (
        <div
          className="flex items-center gap-2 p-4 rounded-xl
          bg-gray-50 dark:bg-white/5
          border border-gray-200 dark:border-white/10
          text-sm text-gray-500 dark:text-gray-400 transition"
        >
          <Wallet className="h-4 w-4" />
          Connect wallet to view balance
        </div>
      ) : isLoading ? (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading balance...
        </div>
      ) : isError ? (
        <div
          className="flex items-center gap-2 p-4 rounded-xl
          bg-red-50 dark:bg-red-500/10
          border border-red-200 dark:border-red-500/20
          text-sm text-red-600 dark:text-red-400 transition"
        >
          <AlertCircle className="h-4 w-4" />
          Error fetching balance
        </div>
      ) : balance ? (
        (() => {
          const formatted = formatUnits(
            balance.value,
            balance.decimals
          );

          return (
            <div className="space-y-4">

              {/* Main Balance Display */}
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Available Balance
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] dark:text-white">
                  {Number(formatted).toFixed(4)}{" "}
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    {balance.symbol}
                  </span>
                </div>
              </div>

              {/* Raw Value */}
              <div className="text-xs text-gray-500 dark:text-gray-400 font-mono break-all">
                Raw (Wei): {balance.value.toString()}
              </div>
            </div>
          );
        })()
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No balance data available
        </p>
      )}
    </div>
  );
}
