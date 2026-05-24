"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CrossChainSecurityPage() {

  const chains = [

    {
      name: "Ethereum",
      status: "Secure",
      activity: "Normal",
    },

    {
      name: "BNB Chain",
      status: "Monitoring",
      activity:
        "Suspicious bridge activity",
    },

    {
      name: "Polygon",
      status: "Secure",
      activity: "Stable",
    },

    {
      name: "Solana",
      status: "Protected",
      activity:
        "AI anomaly protection active",
    },

    {
      name: "Arbitrum",
      status: "Monitoring",
      activity:
        "High wallet interaction volume",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Cross-Chain Security
            </h1>

            <p className="text-zinc-400">
              AI-powered multi-chain cybersecurity intelligence engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            MULTI-CHAIN ACTIVE

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {chains.map(
            (chain, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {chain.name}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    chain.status ===
                    "Secure"
                      ? "bg-green-500 text-black"
                      : chain.status ===
                        "Monitoring"
                      ? "bg-yellow-500 text-black"
                      : "bg-blue-500 text-black"
                  }`}>

                    {chain.status}

                  </span>

                </div>

                <p className="text-zinc-300 text-lg leading-8">
                  {chain.activity}
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
