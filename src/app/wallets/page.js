import Navbar from "@/components/Navbar";

export default function WalletsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Wallet Intelligence
      </h1>

      <div className="grid gap-4">

        {[
          "Bitcoin Wallets",
          "Ethereum Wallets",
          "Solana Wallets",
          "BNB Chain Wallets",
          "Tron Wallets",
          "XRP Ledger Wallets",
          "Cardano Wallets",
          "Polygon Wallets",
          "Avalanche Wallets",
          "Pi Network Wallets",
          "TON Wallets",
          "Stablecoin Wallets",
          "NFT Wallets",
          "DeFi Wallets"
        ].map((wallet, index) => (

          <div
            key={index}
            className="border border-cyan-500 rounded-2xl p-6 bg-zinc-900"
          >

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {wallet}
            </h2>

            <p className="text-gray-400">
              AI-powered monitoring, suspicious transaction detection,
              digital asset intelligence, and advanced cyber protection
              for {wallet.toLowerCase()}.
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}
