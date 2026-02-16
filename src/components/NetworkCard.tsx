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
    <div className="p-6 bg-white rounded-xl shadow space-y-4">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Wifi className="h-5 w-5 text-[#6b6b6b]" />
        <h2 className="text-xl font-semibold text-[#1f1f1f]">
          Network
        </h2>
      </div>

      {isConnected && chain ? (
        <div className="space-y-2 text-sm">

          <p className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#6b6b6b]" />
            <strong>Network Name:</strong> {chain.name}
          </p>

          <p>
            <strong>Chain ID:</strong> {chain.id}
          </p>

          {isSupported ? (
            <p className="flex items-center gap-2 text-green-600 font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Supported Network
            </p>
          ) : (
            <p className="flex items-center gap-2 text-red-600 font-medium">
              <AlertCircle className="h-4 w-4" />
              Unsupported Network
            </p>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Wifi className="h-4 w-4" />
          Connect wallet to view network
        </div>
      )}
    </div>
  );
}
