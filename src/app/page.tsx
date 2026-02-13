import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#4a433b] p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Web3 Wallet Dashboard
        </h1>

        <div className="flex justify-center">
          <ConnectWallet />
        </div>

        {/* Future balance section */}
        <div className="mt-8 space-y-3 text-sm opacity-70">
          <div className="flex justify-between">
            <span>ETH Balance</span>
            <span>—</span>
          </div>
          <div className="flex justify-between">
            <span>USDT Balance</span>
            <span>—</span>
          </div>
        </div>
      </div>
    </main>
  );
}
