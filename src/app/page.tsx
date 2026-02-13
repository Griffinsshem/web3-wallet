import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#4a433b] p-10 shadow-2xl">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-white">
          Web3 Wallet Dashboard
        </h1>

        <p className="mt-2 text-center text-sm text-gray-300">
          Connect your wallet to view balances
        </p>

        <div className="mt-8 flex justify-center">
          <ConnectWallet />
        </div>

        {/* Balance Section */}
        <div className="mt-10 space-y-4 border-t border-gray-600 pt-6">
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-sm">ETH Balance</span>
            <span className="font-medium text-white">—</span>
          </div>

          <div className="flex items-center justify-between text-gray-300">
            <span className="text-sm">USDT Balance</span>
            <span className="font-medium text-white">—</span>
          </div>
        </div>
      </div>
    </main>
  );
}
