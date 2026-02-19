"use client";

import Link from "next/link";
import AccountCard from "@/components/AccountCard";
import NetworkCard from "@/components/NetworkCard";
import BalanceCard from "@/components/BalanceCard";

import {
  FiHome,
  FiGrid,
  FiUser,
  FiWifi,
  FiDollarSign,
} from "react-icons/fi";

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br 
      from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] 
      dark:from-[#0f0f0f] dark:via-[#111111] dark:to-[#1a1a1a]
      px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 transition-colors duration-500">

      <div className="mx-auto w-full max-w-6xl rounded-3xl 
        bg-white/60 dark:bg-white/5
        p-6 sm:p-10 lg:p-14 
        shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        backdrop-blur-xl 
        border border-white/40 dark:border-white/10
        animate-fadeUp transition-all duration-300">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl 
                bg-[#1f1f1f] dark:bg-white text-white dark:text-black">
                <FiGrid className="text-lg" />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight 
                text-[#1f1f1f] dark:text-white">
                Dashboard
              </h1>
            </div>

            <p className="mt-2 text-sm text-[#5c5c5c] dark:text-gray-400">
              Wallet overview and network details
            </p>
          </div>


        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 border-t 
          border-[#d6d1c7] dark:border-white/10" />

        {/* Content Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">

          {/* Account */}
          <div className="rounded-2xl 
            bg-white/50 dark:bg-white/5
            p-5 sm:p-8 
            border border-white/50 dark:border-white/10
            shadow-sm dark:shadow-lg
            transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1
            dark:hover:shadow-2xl">

            <div className="mb-4 flex items-center gap-2 text-sm font-medium 
              text-[#6b6b6b] dark:text-gray-400">
              <FiUser />
              Account
            </div>

            <AccountCard />
          </div>

          {/* Network */}
          <div className="rounded-2xl 
            bg-white/50 dark:bg-white/5
            p-5 sm:p-8 
            border border-white/50 dark:border-white/10
            shadow-sm dark:shadow-lg
            transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1
            dark:hover:shadow-2xl">

            <div className="mb-4 flex items-center gap-2 text-sm font-medium 
              text-[#6b6b6b] dark:text-gray-400">
              <FiWifi />
              Network
            </div>

            <NetworkCard />
          </div>

          {/* Balance */}
          <div className="md:col-span-2 rounded-2xl 
            bg-white/50 dark:bg-white/5
            p-5 sm:p-8 
            border border-white/50 dark:border-white/10
            shadow-sm dark:shadow-lg
            transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1
            dark:hover:shadow-2xl">

            <div className="mb-4 flex items-center gap-2 text-sm font-medium 
              text-[#6b6b6b] dark:text-gray-400">
              <FiDollarSign />
              Balance
            </div>

            <BalanceCard />
          </div>

        </div>

      </div>
    </main>
  );
}
