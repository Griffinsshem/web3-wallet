"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm">
          Connected:{" "}
          <span className="font-semibold">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        </p>

        <button
          onClick={() => disconnect()}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      disabled={isPending}
      className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition disabled:opacity-50"
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
