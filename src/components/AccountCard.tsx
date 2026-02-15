"use client";

import { useAccount, useConnect } from "wagmi";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function AccountCard() {
  const { address, isConnected, status } = useAccount();
  const { connect, connectors, isPending } = useConnect();

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-4">
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
        <div className="space-y-3">
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600">
            Wallet not connected
          </div>

          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isPending
                ? "Connecting..."
                : `Connect with ${connector.name}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
