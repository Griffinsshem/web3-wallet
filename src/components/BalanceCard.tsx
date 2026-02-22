"use client";

import { useAccount } from "wagmi";

const SUPPORTED_CHAIN_ID = 1;

export default function NetworkCard() {
  const { chain, isConnected } = useAccount();
  const isSupported = chain?.id === SUPPORTED_CHAIN_ID;

  return (
    <div className="space-y-6">

      <h2 className="text-lg font-semibold text-[#1a1a1a] dark:text-white">
        Network
      </h2>

      {isConnected && chain ? (
        <div className="space-y-4 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Network
            </span>
            <span className="font-medium text-[#1a1a1a] dark:text-white">
              {chain.name}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Chain ID
            </span>
            <span className="font-medium text-[#1a1a1a] dark:text-white">
              {chain.id}
            </span>
          </div>

          <div
            className={`
              inline-flex px-3 py-1 rounded-full text-xs font-medium
              ${isSupported
                ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"}
            `}
          >
            {isSupported ? "Supported Network" : "Unsupported Network"}
          </div>

        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Connect wallet to view network
        </p>
      )}
    </div>
  );
}