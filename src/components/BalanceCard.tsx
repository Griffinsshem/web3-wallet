"use client";

import { useAccount, useBalance } from "wagmi";
import { formatUnits } from "viem";

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
    <div className="p-6 bg-white rounded-xl shadow space-y-2">
      <h2 className="text-xl font-semibold">Balance</h2>

      {!isConnected ? (
        <p className="text-gray-500">
          Connect wallet to view balance
        </p>
      ) : isLoading ? (
        <p className="text-gray-500">
          Loading balance...
        </p>
      ) : isError ? (
        <p className="text-red-600">
          Error fetching balance
        </p>
      ) : balance ? (
        <>
          {(() => {
            const formatted = formatUnits(
              balance.value,
              balance.decimals
            );

            return (
              <>
                <p>
                  <strong>Formatted:</strong>{" "}
                  {Number(formatted).toFixed(4)}{" "}
                  {balance.symbol}
                </p>
                <p>
                  <strong>Raw (Wei):</strong>{" "}
                  {balance.value.toString()}
                </p>
              </>
            );
          })()}
        </>
      ) : (
        <p>No balance data available</p>
      )}
    </div>
  );
}
