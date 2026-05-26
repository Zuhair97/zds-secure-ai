"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function QuantumSecurityPage() {

  const quantumSystems = [

    {
      feature:
        "Post-Quantum Preparation",
      status:
        "Operational",
      details:
        "AI analyzing infrastructure readiness for post-quantum cybersecurity migration.",
    },

    {
      feature:
        "Cryptographic Intelligence",
      status:
        "Protected",
      details:
        "Continuous monitoring of encryption integrity and cryptographic risks.",
    },

    {
      feature:
        "Quantum Threat Forecasting",
      status:
        "Analyzing",
      details:
        "AI forecasting future cryptographic vulnerabilities and emerging risks.",
    },

    {
      feature:
        "Adaptive Encryption Defense",
      status:
        "Live",
      details:
        "Autonomous encryption resilience and future-proof security infrastructure active.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-300 to-cyan-400 text-transparent bg-clip-text">
              Quantum Security
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered post-quantum cybersecurity and future-proof cryptographic infrastructure.
            </p>

          </div>

          <div className="bg-slate-300 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-slate-300/40">

            QUANTUM READY

          </div>

        </div>

        <div className="grid gap-6">

          {quantumSystems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-slate-400/20 rounded-3xl p-6 shadow-2xl shadow-slate-400/10"
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
