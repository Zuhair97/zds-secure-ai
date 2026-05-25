"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Web3FraudPage() {

  const threats = [

    {
      threat:
        "Wallet Drainer Contract",
      risk:
        "Critical",
      details:
        "Unauthorized token approval escalation detected.",
    },

    {
      threat:
        "Rug Pull Token",
      risk:
        "High",
      details:
        "AI identified suspicious liquidity withdrawal patterns.",
    },

    {
      threat:
        "NFT Mint Scam",
      risk:
        "Medium",
      details:
        "Fake minting domain impersonation blocked.",
    },

    {
      threat:
        "Phishing Airdrop",
      risk:
        "Blocked",
      details:
        "Malicious wallet connection request prevented.",
    },

  ];

  function getRiskColor(risk) {

    switch (risk) {

      case "Critical":
        return "bg-red-500 text-white";

      case "High":
        return "bg-orange-500 text-black";

      case "Medium":
        return "bg-yellow-500 text-black";

      default:
        return "bg-green-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Web3 Fraud Intelligence
            </h1>

            <p className="text-zinc-400">
              AI-powered blockchain scam detection and Web3 cybersecurity intelligence engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            WEB3 DEFENSE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {threats.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.threat}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getRiskColor(item.risk)}`}>

                    {item.risk}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {item.details}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
