"use client";

import { useAccount } from "wagmi";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function DashboardPage() {
  const { address, isConnected, status } = useAccount();

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Web3 Dashboard</h1>

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
      </div>
    </main>
  );
}
