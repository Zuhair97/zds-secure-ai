"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function BlockchainIntelligencePage() {

  const intelligence = [

    {
      feature:
        "Suspicious Wallet Analysis",
      status:
        "ACTIVE",
      details:
        "AI analyzing suspicious wallet behavior and transaction anomalies.",
    },

    {
      feature:
        "Fraud Chain Correlation",
      status:
        "MONITORING",
      details:
        "Blockchain fraud intelligence and scam pattern detection operational.",
    },

    {
      feature:
        "Recovery Investigation Workflows",
      status:
        "READY",
      details:
        "AI-assisted blockchain recovery and investigation infrastructure enabled.",
    },

    {
      feature:
        "Smart Contract Risk Intelligence",
      status:
        "VERIFIED",
      details:
        "AI evaluating suspicious smart contract interactions and threat indicators.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-fuchsia-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
            Blockchain Intelligence Center
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered digital asset protection and blockchain threat intelligence infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {intelligence.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-fuchsia-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-fuchsia-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.feature}
                  </h2>

                  <p className="text-zinc-400 mt-2 text-lg">
                    {item.details}
                  </p>

                </div>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                  {item.status}

                </span>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
