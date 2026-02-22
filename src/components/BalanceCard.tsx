"use client";

import { useAccount, useBalance } from "wagmi";
import { formatUnits } from "viem";
import { Loader2 } from "lucide-react";

export default function BalanceCard() {
  const { address, isConnected } = useAccount();

  const { data: balance, isLoading } = useBalance({
    address,
    query: { enabled: !!address },
  });

  if (!isConnected) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        Connect wallet to view balance
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading balance...
      </div>
    );
  }

  if (!balance) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400">
        No balance data available
      </div>
    );
  }

  const formatted = formatUnits(balance.value, balance.decimals);

  return (
    <div className="space-y-6">

      <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Available Balance
      </p>

      <div className="flex items-end gap-3">
        <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1a1a1a] dark:text-white">
          {Number(formatted).toFixed(4)}
        </span>
        <span className="text-lg text-gray-500 dark:text-gray-400 mb-1">
          {balance.symbol}
        </span>
      </div>

      <div className="text-xs text-gray-400 font-mono break-all">
        Raw (Wei): {balance.value.toString()}
      </div>

    </div>
  );
}