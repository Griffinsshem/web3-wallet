"use client";

import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";

const USDT_CONTRACT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

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

    watch: true,

    query: {
      enabled: !!address && isConnected,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  });

  const formattedBalance =
    data && isConnected
      ? formatUnits(data as bigint, 6)
      : null;

  return {
    balance: formattedBalance,
    isLoading,
    isError,
    isConnected,
  };
}
