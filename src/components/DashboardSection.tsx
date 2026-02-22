"use client";

import AccountCard from "@/components/AccountCard";
import NetworkCard from "@/components/NetworkCard";
import BalanceCard from "@/components/BalanceCard";
import { FiGrid, FiArrowUpRight, FiArrowDownLeft, FiExternalLink } from "react-icons/fi";

export default function DashboardPage() {
  return (
    <main
      className="
        relative min-h-screen
        bg-gradient-to-br
        from-[#f4f1eb] via-[#ebe6dc] to-[#e4ded3]
        dark:from-[#0b0b0c] dark:via-[#0f1115] dark:to-[#111318]
        px-4 sm:px-6 lg:px-8
        py-12 sm:py-16
        transition-colors duration-500
      "
    >
      <div className="mx-auto w-full max-w-7xl space-y-10">

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="
              flex h-12 w-12 items-center justify-center rounded-2xl
              bg-black text-white
              dark:bg-white dark:text-black
            ">
              <FiGrid className="text-lg" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1a1a1a] dark:text-white">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Wallet overview and on-chain insights
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Hero Balance Card */}
            <div className="
              rounded-3xl
              bg-white
              dark:bg-[#15161a]
              border border-gray-200 dark:border-white/5
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              p-8
              transition-all
            ">
              <BalanceCard />

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-white/10 my-8" />

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition hover:opacity-80">
                  <FiArrowUpRight />
                  Send
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 text-sm font-medium transition hover:bg-gray-200 dark:hover:bg-white/10">
                  <FiArrowDownLeft />
                  Receive
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 text-sm font-medium transition hover:bg-gray-200 dark:hover:bg-white/10">
                  <FiExternalLink />
                  Explorer
                </button>
              </div>
            </div>

            {/* Portfolio & Activity Card */}
            <div className="
              rounded-3xl
              bg-white
              dark:bg-[#15161a]
              border border-gray-200 dark:border-white/5
              shadow-sm dark:shadow-lg
              p-8
              transition
            ">
              <h2 className="text-lg font-semibold text-[#1a1a1a] dark:text-white mb-6">
                Recent Activity
              </h2>

              <div className="space-y-4">

                {/* Empty State */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a] dark:text-white">
                      No recent transactions
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Your recent transfers and interactions will appear here.
                    </p>
                  </div>
                </div>

                {/* Subtle info box */}
                <div className="text-xs text-gray-400">
                  Activity updates automatically when transactions occur.
                </div>

              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8">

            <div className="
              rounded-3xl
              bg-white
              dark:bg-[#15161a]
              border border-gray-200 dark:border-white/5
              shadow-sm dark:shadow-lg
              p-6
              transition
            ">
              <AccountCard />
            </div>

            <div className="
              rounded-3xl
              bg-white
              dark:bg-[#15161a]
              border border-gray-200 dark:border-white/5
              shadow-sm dark:shadow-lg
              p-6
              transition
            ">
              <NetworkCard />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}