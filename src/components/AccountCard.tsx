"use client";

import { useAccount, useConnect } from "wagmi";
import { useState } from "react";
import {
  User,
  Copy,
  Check,
  Wallet,
  Loader2,
  Plug,
} from "lucide-react";

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
    <div className="p-6 rounded-2xl 
      bg-white/70 dark:bg-white/5
      backdrop-blur-xl
      border border-white/40 dark:border-white/10
      shadow-sm dark:shadow-lg
      space-y-6 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-[#6b6b6b] dark:text-gray-400" />
          <h2 className="text-xl font-semibold text-[#1f1f1f] dark:text-white">
            Account
          </h2>
        </div>

        {/* Status Badge */}
        <div
          className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full transition
            ${isConnected
              ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
              : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
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

          {/* Address Card */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 
            rounded-xl 
            bg-[#f5f3ef] dark:bg-white/5
            border border-[#e6e1d8] dark:border-white/10
            px-4 py-3 transition">

            <div className="flex items-center gap-2 text-sm font-medium 
              text-[#1f1f1f] dark:text-white break-all">
              <Wallet className="h-4 w-4 text-[#6b6b6b] dark:text-gray-400" />
              {shortenAddress(address)}
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs font-medium 
                text-[#1f1f1f] dark:text-white 
                hover:opacity-60 transition"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Full Address */}
          <div className="text-xs text-[#5c5c5c] dark:text-gray-400 break-all font-mono">
            {address}
          </div>
        </div>
      ) : (
        <div className="space-y-4">

          <div className="flex items-center gap-2 p-4 
            bg-red-50 dark:bg-red-500/10
            border border-red-200 dark:border-red-500/20
            rounded-xl text-sm 
            text-red-600 dark:text-red-400 transition">
            <Plug className="h-4 w-4" />
            Wallet not connected
          </div>

          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 
                px-4 py-2.5 rounded-xl 
                bg-[#1f1f1f] dark:bg-white
                text-white dark:text-black
                text-sm font-medium 
                hover:opacity-90 
                transition disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="h-4 w-4" />
                  Connect with {connector.name}
                </>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
