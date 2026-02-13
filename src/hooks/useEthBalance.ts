"use client";

import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";

export function useEthBalance() {
  const { address, isConnected } = useAccount();

  const { data, isLoading, isError } = useBalance({
    address,
    query: {
      enabled: !!address && isConnected,
    },
  });

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
