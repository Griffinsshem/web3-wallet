"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { motion } from "framer-motion";

type Token = {
  id: string;
  symbol: string;
  name: string;
};

type TokenData = {
  price: number;
  change: number;
  history: { price: number }[];
};

const TOKENS: Token[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "binancecoin", symbol: "BNB", name: "BNB" },
];

export function CryptoTicker() {
  const [data, setData] = useState<Record<string, TokenData>>({});
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const ids = TOKENS.map((t) => t.id).join(",");

      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
      );
      const priceData = await res.json();

      const updated: Record<string, TokenData> = {};

      TOKENS.forEach((token) => {
        const price = priceData[token.id]?.usd ?? 0;
        const change = priceData[token.id]?.usd_24h_change ?? 0;

        updated[token.id] = {
          price,
          change,
          history:
            data[token.id]?.history?.length
              ? [...data[token.id].history.slice(-19), { price }]
              : Array.from({ length: 20 }, () => ({ price })),
        };
      });

      setData(updated);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch prices", error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6">
      {TOKENS.map((token, index) => {
        const tokenData = data[token.id];
        const isPositive = tokenData?.change >= 0;

        return (
          <motion.div
            key={token.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="
              group rounded-2xl
              border border-white/10
              bg-white/60 dark:bg-[#121212]/80
              backdrop-blur-xl
              p-5
              shadow-lg
              hover:-translate-y-1
              hover:shadow-2xl
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-900">
                  {token.name}
                </div>
                <div className="text-xs text-gray-800">
                  {token.symbol}
                </div>
              </div>

              {!loading && (
                <div
                  className={`text-xs font-medium ${isPositive
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
                >
                  {isPositive ? "+" : ""}
                  {tokenData?.change.toFixed(2)}%
                </div>
              )}
            </div>

            {/* Price */}
            <div
              className={`
                mt-3 text-2xl font-bold tracking-tight
                ${isPositive
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
                }
                transition-colors duration-500
              `}
            >
              {loading
                ? "Loading..."
                : `$${tokenData?.price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}`}
            </div>

            {/* Sparkline */}
            {!loading && tokenData?.history && (
              <div className="mt-4 h-10 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tokenData.history}>
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke={isPositive ? "#22c55e" : "#ef4444"}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}