"use client";

import { useAccount, useReadContract, useBlockNumber } from "wagmi";
import { useEffect } from "react";
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

  const { data, isLoading, isError, refetch } = useReadContract({
    address: USDT_CONTRACT,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  });

  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });

  useEffect(() => {
    if (blockNumber) {
      refetch();
    }
  }, [blockNumber, refetch]);

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
