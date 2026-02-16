"use client";

import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Wallet, LogOut, CheckCircle2 } from "lucide-react";

export function ConnectWallet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (!mounted) return null; // 🔥 prevents hydration mismatch

  if (isConnected) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="flex items-center gap-2 text-sm text-gray-600">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>

        <button
          onClick={() => disconnect()}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-2 text-white hover:opacity-90 transition"
        >
          <LogOut className="h-4 w-4" />
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-white hover:opacity-90 transition"
    >
      <Wallet className="h-4 w-4" />
      Connect Wallet
    </button>
  );
}
