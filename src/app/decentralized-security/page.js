"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DecentralizedSecurityPage() {

  const nodes = [

    {
      node:
        "Threat Intelligence Consensus",
      status:
        "Synchronized",
      details:
        "Distributed AI threat validation operational.",
    },

    {
      node:
        "Immutable Security Ledger",
      status:
        "Verified",
      details:
        "Cyber event integrity stored securely on-chain.",
    },

    {
      node:
        "Recovery Validation Network",
      status:
        "Protected",
      details:
        "Decentralized recovery trust verification active.",
    },

    {
      node:
        "Blockchain Telemetry",
      status:
        "Monitoring",
      details:
        "AI correlating distributed security telemetry.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Verified":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Synchronized":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Decentralized Security
            </h1>

            <p className="text-zinc-400">
              AI-powered blockchain cybersecurity and distributed trust intelligence infrastructure.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            TRUST NETWORK ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {nodes.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.node}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                    {item.status}

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
