"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function QuantumSecurityPage() {

  const systems = [

    {
      feature:
        "Post-Quantum Cryptography",
      status:
        "Operational",
      details:
        "Quantum-resistant encryption infrastructure initialized.",
    },

    {
      feature:
        "Quantum-Safe Identity Protection",
      status:
        "Protected",
      details:
        "Advanced future-proof authentication systems active.",
    },

    {
      feature:
        "AI Cryptographic Monitoring",
      status:
        "Live",
      details:
        "AI continuously analyzing encryption resilience and integrity.",
    },

    {
      feature:
        "Quantum-Ready Communication",
      status:
        "Synchronized",
      details:
        "Secure future communication channels prepared for next-generation threats.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-yellow-500 text-black";

      case "Live":
        return "bg-red-500 text-white";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-violet-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
              Quantum Security
            </h1>

            <p className="text-zinc-300 text-lg">
              Quantum-resistant AI cybersecurity and future-proof encryption infrastructure.
            </p>

          </div>

          <div className="bg-violet-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-violet-500/40">

            QUANTUM READY

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-violet-500/20 rounded-3xl p-6 shadow-2xl shadow-violet-500/10"
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
