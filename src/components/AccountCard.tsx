"use client";

import { useAccount, useConnect } from "wagmi";
import { useState } from "react";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function AccountCard() {
  const { address, isConnected, status } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-5">
      <h2 className="text-xl font-semibold text-[#1f1f1f]">
        Account
      </h2>

      <p className="text-sm text-[#6b6b6b]">
        <strong>Status:</strong> {status}
      </p>

      {isConnected && address ? (
        <div className="space-y-4">
          {/* Address Display Card */}
          <div className="flex items-center justify-between rounded-xl bg-[#f5f3ef] border border-[#e6e1d8] px-4 py-3">
            <span className="text-sm font-medium text-[#1f1f1f]">
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
        <div className="space-y-3">
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            Wallet not connected
          </div>

          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              className="w-full px-4 py-2 rounded-xl bg-[#1f1f1f] text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
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
