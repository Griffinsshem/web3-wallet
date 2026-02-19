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

  if (!mounted) return null; // prevents hydration mismatch

  if (isConnected) {
    return (
      <div className="w-full flex flex-col items-center gap-6 text-center">

        <p className="flex items-center gap-2 text-sm tracking-wide text-gray-600 dark:text-gray-400">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          Connected:
          <span className="font-medium tracking-wider">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        </p>

        <button
          onClick={() => disconnect()}
          className="
            w-full sm:w-auto
            flex items-center justify-center gap-2
            rounded-xl
            bg-red-500
            px-8 py-3
            text-sm font-medium tracking-wide text-white
            hover:opacity-90
            transition-all duration-200
          "
        >
          <LogOut className="h-4 w-4" />
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => connect({ connector: connectors[0] })}
        className="
          w-full sm:w-auto
          flex items-center justify-center gap-2
          rounded-xl
          bg-blue-600
          px-8 py-3
          text-sm font-medium tracking-wide text-white
          hover:opacity-90
          transition-all duration-200
        "
      >
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </button>
    </div>
  );
}
