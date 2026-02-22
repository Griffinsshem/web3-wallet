"use client";

import { useEffect, useState } from "react";

type Token = {
  id: string;
  symbol: string;
  name: string;
};

const TOKENS: Token[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "binancecoin", symbol: "BNB", name: "BNB" },
];

export function CryptoTicker() {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const ids = TOKENS.map((t) => t.id).join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
      );
      const data = await res.json();

      const formatted: Record<string, number> = {};
      TOKENS.forEach((token) => {
        formatted[token.id] = data[token.id]?.usd ?? 0;
      });

      setPrices(formatted);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch prices", error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 15000); // refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      {TOKENS.map((token) => (
        <div
          key={token.id}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 transition hover:scale-[1.02]"
        >
          <div className="text-sm text-gray-400">{token.name}</div>
          <div className="text-lg font-semibold text-white">
            {loading
              ? "Loading..."
              : `$${prices[token.id]?.toLocaleString()}`}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {token.symbol}
          </div>
        </div>
      ))}
    </div>
  );
}