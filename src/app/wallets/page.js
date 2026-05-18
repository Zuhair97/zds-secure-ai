import Navbar from "@/components/Navbar";

export default function WalletsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Wallet Intelligence
      </h1>

      <div className="grid gap-4">

        <div className="border border-cyan-500 rounded-2xl p-6 bg-zinc-900">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Bitcoin Wallets
          </h2>

          <p className="text-gray-400">
            AI monitoring of BTC wallet activities,
            suspicious transactions, and threat analysis.
          </p>
        </div>

        <div className="border border-cyan-500 rounded-2xl p-6 bg-zinc-900">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Ethereum Wallets
          </h2>

          <p className="text-gray-400">
            Smart contract risk detection,
            DeFi monitoring, and asset protection.
          </p>
        </div>

      </div>

    </main>
  );
}
