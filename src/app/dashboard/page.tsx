"use client";

import { useAccount, useBalance } from "wagmi";
import { formatUnits } from "viem";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function DashboardPage() {
  const { address, isConnected, status, chain } = useAccount();

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
    <main className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Web3 Dashboard</h1>

        {/* Account Card */}
        <div className="p-6 bg-white rounded-xl shadow space-y-2">
          <h2 className="text-xl font-semibold">Account</h2>

          <p>
            <strong>Status:</strong> {status}
          </p>

          {isConnected && address ? (
            <>
              <p>
                <strong>Full Address:</strong> {address}
              </p>
              <p>
                <strong>Short Address:</strong>{" "}
                {shortenAddress(address)}
              </p>
            </>
          ) : (
            <p className="text-red-500">
              Wallet not connected
            </p>
          )}
        </div>

        {/* Network Card */}
        <div className="p-6 bg-white rounded-xl shadow space-y-2">
          <h2 className="text-xl font-semibold">Network</h2>

          {isConnected && chain ? (
            <>
              <p>
                <strong>Network Name:</strong> {chain.name}
              </p>
              <p>
                <strong>Chain ID:</strong> {chain.id}
              </p>
              <p className="text-green-600">
                Supported Network
              </p>
            </>
          ) : (
            <p className="text-gray-500">
              Connect wallet to view network
            </p>
          )}
        </div>

        {/* Balance Card */}
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
      </div>
    </main>
  );
}
