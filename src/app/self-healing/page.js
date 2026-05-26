"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SelfHealingPage() {

  const systems = [

    {
      feature:
        "Automatic Infrastructure Recovery",
      status:
        "Operational",
      details:
        "AI restoring cybersecurity services automatically after failure.",
    },

    {
      feature:
        "Threat Rollback Engine",
      status:
        "Protected",
      details:
        "Autonomous rollback systems reversing malicious activity.",
    },

    {
      feature:
        "Resilience Monitoring",
      status:
        "Live",
      details:
        "Continuous AI system health and infrastructure analysis active.",
    },

    {
      feature:
        "Backup Restoration Systems",
      status:
        "Synchronized",
      details:
        "Distributed cloud backup recovery infrastructure operational.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-lime-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-lime-400 to-cyan-400 text-transparent bg-clip-text">
              Self-Healing Systems
            </h1>

            <p className="text-zinc-300 text-lg">
              Autonomous AI recovery and self-healing cybersecurity infrastructure.
            </p>

          </div>

          <div className="bg-lime-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-lime-500/40">

            SELF-HEALING ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-lime-500/20 rounded-3xl p-6 shadow-2xl shadow-lime-500/10"
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
