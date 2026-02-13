"use client";

import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

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
        <p className="text-sm text-gray-600">
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
        <button
          onClick={() => disconnect()}
          className="rounded-lg bg-red-500 px-6 py-2 text-white"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="rounded-lg bg-blue-600 px-6 py-2 text-white"
    >
      Connect Wallet
    </button>
  );
}
