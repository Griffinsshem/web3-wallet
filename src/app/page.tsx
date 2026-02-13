import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e8e4dc] via-[#e2ddd4] to-[#dcd6cc] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/60 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-[#1f1f1f]">
          Web3 Wallet Dashboard
        </h1>

        <p className="mt-2 text-center text-sm text-[#1f1f1f]">
          Connect your wallet to securely view balances
        </p>

        <div className="mt-8 flex justify-center">
          <ConnectWallet />
        </div>

        {/* Balance Section */}
        <div className="mt-10 space-y-5 border-t border-[#d6d1c7] pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6b6b6b]">ETH Balance</span>
            <span className="text-base font-semibold text-[#1f1f1f]">—</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6b6b6b]">USDT Balance</span>
            <span className="text-base font-semibold text-[#1f1f1f]">—</span>
          </div>
        </div>
      </div>
    </main>
  );
}
