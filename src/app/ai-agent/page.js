import Navbar from "@/components/Navbar";

export default function AIAgentPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Sentinel AI Agent
      </h1>

      <div className="border border-cyan-500 rounded-2xl p-6 bg-zinc-900">

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Autonomous AI Defense System
        </h2>

        <p className="text-gray-400 mb-4">
          Sentinel AI continuously analyzes cyber threats,
          blockchain activity, digital assets, IoT systems,
          suspicious behavior, and endpoint vulnerabilities.
        </p>

        <p className="text-green-400 text-xl">
          AI Status: ACTIVE
        </p>

      </div>

    </main>
  );
}
