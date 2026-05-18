import Navbar from "@/components/Navbar";

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        Digital Assets
      </h1>

      <div className="grid gap-4">

        <div className="border border-cyan-500 bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            Bitcoin Wallet
          </h2>

          <p className="text-gray-400">
            Status: Protected
          </p>
        </div>

        <div className="border border-cyan-500 bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            Ethereum Assets
          </h2>

          <p className="text-gray-400">
            Status: Monitoring Active
          </p>
        </div>

      </div>

    </main>
  );
}
