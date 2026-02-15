"use client";

import { useAccount } from "wagmi";

const SUPPORTED_CHAIN_ID = 1; // Ethereum Mainnet

export default function NetworkCard() {
  const { chain, isConnected } = useAccount();

  const isSupported = chain?.id === SUPPORTED_CHAIN_ID;

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-2">
      <h2 className="text-xl font-semibold">Network</h2>

      {isConnected && chain ? (
        <>
          <p>
            <strong>Network Name:</strong> {chain.name}
          </p>
          <p>
            <strong>Chain ID:</strong> {chain.id}
          </p>

          {isSupported ? (
            <p className="text-green-600">
              Supported Network
            </p>
          ) : (
            <p className="text-red-600">
              Unsupported Network
            </p>
          )}
        </>
      ) : (
        <p className="text-gray-500">
          Connect wallet to view network
        </p>
      )}
    </div>
  );
}
