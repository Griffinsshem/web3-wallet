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
    <div className="p-6 bg-white rounded-xl shadow space-y-4">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-[#6b6b6b]" />
        <h2 className="text-xl font-semibold text-[#1f1f1f]">
          Balance
        </h2>
      </div>

      {!isConnected ? (
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Wallet className="h-4 w-4" />
          Connect wallet to view balance
        </div>
      ) : isLoading ? (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading balance...
        </div>
      ) : isError ? (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          Error fetching balance
        </div>
      ) : balance ? (
        <>
          {(() => {
            const formatted = formatUnits(
              balance.value,
              balance.decimals
            );

            return (
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <strong>Formatted:</strong>
                  {Number(formatted).toFixed(4)} {balance.symbol}
                </p>

                <p className="flex items-center gap-2 text-gray-600">
                  <strong>Raw (Wei):</strong>
                  {balance.value.toString()}
                </p>
              </div>
            );
          })()}
        </>
      ) : (
        <p className="text-sm text-gray-500">
          No balance data available
        </p>
      )}
    </div>
  );
}
