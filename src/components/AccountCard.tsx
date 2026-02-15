"use client";

import { useAccount } from "wagmi";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function AccountCard() {
  const { address, isConnected, status } = useAccount();

  return (
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
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600">
          Wallet not connected
        </div>
      )}
    </div>
  );
}
