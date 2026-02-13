import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Web3 Wallet Landing</h1>

      <ConnectWallet />
    </main>
  );
}
