"use client";

import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";

// 🔹 Mainnet USDT Contract Address
const USDT_CONTRACT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

// 🔹 Minimal ERC20 ABI (only what we need)
const erc20Abi = [
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    type: "function",
  },
] as const;

export function useUsdtBalance() {
  const { address, isConnected } = useAccount();

  const { data, isLoading, isError } = useReadContract({
    address: USDT_CONTRACT,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    chainId: 1,
    query: {
      enabled: !!address,
    },
  });

  const formattedBalance =
    data && isConnected
      ? formatUnits(data as bigint, 6) // USDT has 6 decimals
      : null;

  return {
    balance: formattedBalance,
    isLoading,
    isError,
    isConnected,
  };
}
