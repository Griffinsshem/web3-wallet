"use client";

import { useAccount, useConnect } from "wagmi";
import { useState } from "react";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function AccountCard() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-[#1f1f1f]">
          Account
        </h2>

        {/* Status Badge */}
        <div
          className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${isConnected
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
            }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${isConnected
                ? "bg-green-500 animate-pulse"
                : "bg-red-500"
              }`}
          />
          {isConnected ? "Connected" : "Disconnected"}
        </div>
      </div>

      {isConnected && address ? (
        <div className="space-y-4">
          {/* Address Display Card */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl bg-[#f5f3ef] border border-[#e6e1d8] px-4 py-3">
            <span className="text-sm font-medium text-[#1f1f1f] break-all">
              {shortenAddress(address)}
            </span>

            <button
              onClick={handleCopy}
              className="text-xs font-medium text-[#1f1f1f] hover:opacity-60 transition"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          {/* Full Address */}
          <div className="text-xs text-[#7a7a7a] break-all">
            {address}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            Wallet not connected
          </div>

          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1f1f1f] text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {isPending && (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}

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
