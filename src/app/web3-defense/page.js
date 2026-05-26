"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Web3DefensePage() {

  const defenses = [

    {
      feature:
        "Smart Contract Analysis",
      status:
        "Operational",
      details:
        "AI scanning smart contracts for malicious behavior and hidden risks.",
    },

    {
      feature:
        "Wallet Approval Monitoring",
      status:
        "Protected",
      details:
        "Continuous monitoring of suspicious wallet approval permissions.",
    },

    {
      feature:
        "Rugpull Detection",
      status:
        "Analyzing",
      details:
        "AI evaluating token liquidity, ownership, and developer activity.",
    },

    {
      feature:
        "Wallet Drain Prevention",
      status:
        "Live",
      details:
        "Real-time AI alerts against suspicious draining transactions.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      case "Analyzing":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-orange-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
              Web3 Defense
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered wallet protection and smart contract cybersecurity infrastructure.
            </p>

          </div>

          <div className="bg-orange-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-orange-500/40">

            WEB3 DEFENSE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {defenses.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-orange-500/20 rounded-3xl p-6 shadow-2xl shadow-orange-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.feature}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

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
