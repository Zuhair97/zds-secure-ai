import Navbar from "@/components/Navbar";
import CyberCard from "@/components/CyberCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-cyan-400">
          Sentinel AI
        </h1>

        <button className="border border-cyan-400 px-4 py-2 rounded-xl text-cyan-400">
          ACTIVE
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">

        <CyberCard
          title="Threats Blocked"
          description="128 attacks stopped today"
        />

        <CyberCard
          title="Wallet Monitoring"
          description="24 blockchain wallets secured"
        />

        <CyberCard
          title="AI Status"
          description="AI engine running normally"
        />

        <CyberCard
          title="Security Score"
          description="98% protection strength"
        />

      </div>

      <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Live AI Monitoring
        </h2>

        <p className="text-gray-400">
          Sentinel AI is actively scanning digital assets,
          blockchain wallets, and suspicious cyber activities
          in real-time.
        </p>

      </div>

    </main>
  );
}

