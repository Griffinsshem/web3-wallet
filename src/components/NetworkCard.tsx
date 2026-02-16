"use client";

import { useAccount } from "wagmi";
import {
  Wifi,
  AlertCircle,
  CheckCircle2,
  Globe,
} from "lucide-react";

const SUPPORTED_CHAIN_ID = 1; // Ethereum Mainnet

export default function NetworkCard() {
  const { chain, isConnected } = useAccount();
  const isSupported = chain?.id === SUPPORTED_CHAIN_ID;

  return (
    <div
      className="p-6 rounded-2xl 
      bg-white/70 dark:bg-white/5
      backdrop-blur-xl
      border border-white/40 dark:border-white/10
      shadow-sm dark:shadow-lg
      space-y-5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <Wifi className="h-5 w-5 text-[#6b6b6b] dark:text-gray-400" />
        <h2 className="text-xl font-semibold text-[#1f1f1f] dark:text-white">
          Network
        </h2>
      </div>

      {isConnected && chain ? (
        <div className="space-y-4 text-sm">

          {/* Network Name */}
          <div className="flex items-center gap-2 text-[#1f1f1f] dark:text-white">
            <Globe className="h-4 w-4 text-[#6b6b6b] dark:text-gray-400" />
            <span className="font-medium">Network:</span>
            <span className="font-semibold">{chain.name}</span>
          </div>

          {/* Chain ID */}
          <div className="text-[#5c5c5c] dark:text-gray-400">
            <span className="font-medium">Chain ID:</span> {chain.id}
          </div>

          {/* Support Status Badge */}
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium w-fit transition
              ${isSupported
                ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
              }`}
          >
            {isSupported ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Supported Network
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4" />
                Unsupported Network
              </>
            )}
          </div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 p-4 rounded-xl
          bg-gray-50 dark:bg-white/5
          border border-gray-200 dark:border-white/10
          text-sm text-gray-500 dark:text-gray-400 transition"
        >
          <Wifi className="h-4 w-4" />
          Connect wallet to view network
        </div>
      )}
    </div>
  );
}
