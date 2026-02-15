"use client";

import AccountCard from "@/components/AccountCard";
import NetworkCard from "@/components/NetworkCard";
import BalanceCard from "@/components/BalanceCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">
          Web3 Dashboard
        </h1>

        <AccountCard />
        <NetworkCard />
        <BalanceCard />
      </div>
    </main>
  );
}
