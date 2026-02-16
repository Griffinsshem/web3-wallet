"use client";

import Link from "next/link";
import AccountCard from "@/components/AccountCard";
import NetworkCard from "@/components/NetworkCard";
import BalanceCard from "@/components/BalanceCard";

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-white/60 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40 animate-fadeUp">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1f1f1f]">
              Dashboard
            </h1>
            <p className="mt-2 text-sm text-[#5c5c5c]">
              Wallet overview and network details
            </p>
          </div>

          <Link
            href="/"
            className="text-sm font-medium text-[#1f1f1f] hover:opacity-70 transition"
          >
            ← Back Home
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 border-t border-[#d6d1c7]" />

        {/* Content Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">

          <div className="group rounded-2xl bg-white/50 p-5 sm:p-8 border border-white/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] animate-fadeUp [animation-delay:0.1s]">
            <AccountCard />
          </div>

          <div className="group rounded-2xl bg-white/50 p-5 sm:p-8 border border-white/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] animate-fadeUp [animation-delay:0.2s]">
            <NetworkCard />
          </div>

          <div className="group md:col-span-2 rounded-2xl bg-white/50 p-5 sm:p-8 border border-white/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] animate-fadeUp [animation-delay:0.3s]">
            <BalanceCard />
          </div>

        </div>
      </div>
    </main>
  );
}
