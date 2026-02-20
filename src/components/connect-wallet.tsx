"use client";

import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import {
  Wallet,
  LogOut,
  CheckCircle2,
  Loader2,
  Copy,
  ExternalLink,
} from "lucide-react";

export function ConnectWallet() {
  const [mounted, setMounted] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (!mounted) return null;

  const copyAddress = async () => {
    if (!address) return;
    setIsCopying(true);
    await navigator.clipboard.writeText(address);
    setTimeout(() => setIsCopying(false), 1000);
  };

  if (isConnected) {
    return (
      <div className="relative w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 text-center space-y-6">

          {/* Connected Badge */}
          <div className="flex items-center justify-center gap-2 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            <span className="tracking-wide font-medium">
              Wallet Connected
            </span>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <span className="font-mono text-sm tracking-wider">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>

            <button
              onClick={copyAddress}
              className="hover:scale-110 active:scale-95 transition-transform"
              title="Copy address"
            >
              <Copy className="h-4 w-4 opacity-70 hover:opacity-100" />
            </button>

            <ExternalLink className="h-4 w-4 opacity-50" />
          </div>

          {/* Disconnect */}
          <button
            onClick={() => disconnect()}
            className="
              w-full
              flex items-center justify-center gap-2
              rounded-xl
              bg-red-500/90
              hover:bg-red-600
              px-6 py-3
              text-sm font-medium text-white
              transition-all duration-200
            "
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10 text-center overflow-hidden">

        {/* Subtle Glow Background */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

        {/* Icon */}
        <div className="relative mb-6 flex justify-center">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
            <Wallet className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="relative text-2xl font-semibold tracking-tight text-white">
          Connect Your Wallet
        </h2>

        <p className="relative mt-2 text-sm text-gray-400">
          Securely access your Web3 dashboard and view on-chain balances.
        </p>

        {/* Connect Button */}
        <div className="relative mt-8">
          <button
            onClick={() => connect({ connector: connectors[0] })}
            disabled={isPending}
            className="
              w-full
              flex items-center justify-center gap-2
              rounded-xl
              bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500
              px-6 py-3
              text-sm font-medium text-white
              shadow-lg shadow-blue-500/20
              hover:shadow-blue-500/40
              hover:scale-[1.02]
              active:scale-[0.98]
              disabled:opacity-70
              transition-all duration-300
            "
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Establishing Secure Connection...
              </>
            ) : (
              <>
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </>
            )}
          </button>
        </div>

        {/* Feature Teaser */}
        <div className="relative mt-8 space-y-2 text-xs text-gray-500">
          <p>• Real-time wallet balance tracking</p>
          <p>• Secure Web3 authentication</p>
          <p>• Optimized RPC performance</p>
        </div>
      </div>
    </div>
  );
}