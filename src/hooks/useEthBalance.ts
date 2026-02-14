"use client";

import { useAccount, useBalance, useBlockNumber } from "wagmi";
import { useEffect } from "react";
import { formatEther } from "viem";

export function useEthBalance() {
  const { address, isConnected } = useAccount();

  const { data, isLoading, isError, refetch } = useBalance({
    address,
    chainId: 1,
    query: {
      enabled: !!address && isConnected,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  });

  // Subscribe to new blocks
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });

  // Refetch on new block
  useEffect(() => {
    if (blockNumber) {
      refetch();
    }
  }, [blockNumber, refetch]);

  const formattedBalance =
    data && !isLoading
      ? parseFloat(formatEther(data.value)).toFixed(4)
      : null;

  return {
    balance: formattedBalance,
    isLoading,
    isError,
    isConnected,
  };
}
