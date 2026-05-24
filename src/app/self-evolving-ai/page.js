"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SelfEvolvingAIPage() {

  const evolutions = [

    {
      engine:
        "Phishing Intelligence Model",
      evolution:
        "AI updated detection patterns automatically.",
      status:
        "Evolving",
    },

    {
      engine:
        "Wallet Threat Defense",
      evolution:
        "Adaptive smart contract anomaly detection improved.",
      status:
        "Learning",
    },

    {
      engine:
        "Behavioral Intelligence",
      evolution:
        "AI refined user behavior risk analysis.",
      status:
        "Optimized",
    },

    {
      engine:
        "Autonomous Response Engine",
      evolution:
        "Machine-speed containment logic upgraded.",
      status:
        "Adaptive",
    },

  ];

  function getStatusColor(status) {

    switch (status) {

      case "Evolving":
        return "bg-green-500 text-black";

      case "Learning":
        return "bg-yellow-500 text-black";

      case "Adaptive":
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
              Self-Evolving AI Defense
            </h1>

            <p className="text-zinc-400">
              Autonomous adaptive AI cybersecurity evolution and machine-speed defense intelligence.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            AI EVOLUTION ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {evolutions.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.engine}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {item.evolution}
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
