"use client";

import Link from "next/link";
import AccountCard from "@/components/AccountCard";
import NetworkCard from "@/components/NetworkCard";
import BalanceCard from "@/components/BalanceCard";

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] px-6 py-16">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white/60 p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40 animate-fadeUp">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1f1f1f]">
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
        <div className="my-10 border-t border-[#d6d1c7]" />

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white/50 p-8 border border-white/50 shadow-sm animate-fadeUp [animation-delay:0.1s]">
            <AccountCard />
          </div>

          <div className="rounded-2xl bg-white/50 p-8 border border-white/50 shadow-sm animate-fadeUp [animation-delay:0.2s]">
            <NetworkCard />
          </div>

          <div className="md:col-span-2 rounded-2xl bg-white/50 p-8 border border-white/50 shadow-sm animate-fadeUp [animation-delay:0.3s]">
            <BalanceCard />
          </div>

        </div>
      </div>
    </main>
  );
}
