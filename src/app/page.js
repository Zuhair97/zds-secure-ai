import CyberCard from "@/components/CyberCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold text-cyan-400 mb-4">
        Sentinel AI
      </h1>

      <p className="text-gray-400 mb-10">
        Advanced AI Cybersecurity & Digital Asset Protection System
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <CyberCard
          title="Threat Detection"
          description="Real-time monitoring against cyber attacks and suspicious activities."
        />

        <CyberCard
          title="Blockchain Security"
          description="Track and protect Web3 wallets, blockchain assets, and transactions."
        />

        <CyberCard
          title="AI Analytics"
          description="AI-powered intelligence for security automation and anomaly detection."
        />

      </div>

    </main>
  );
}
