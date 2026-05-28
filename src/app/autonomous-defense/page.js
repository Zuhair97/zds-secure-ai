"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AutonomousDefensePage() {

  const systems = [

    {
      feature:
        "Autonomous Threat Isolation",
      status:
        "ACTIVE",
      details:
        "AI automatically isolating suspicious infrastructure and risky activity.",
    },

    {
      feature:
        "Self-Healing Recovery",
      status:
        "READY",
      details:
        "Recovery continuity and operational resilience systems operational.",
    },

    {
      feature:
        "Adaptive Defense Intelligence",
      status:
        "MONITORING",
      details:
        "AI continuously adapting defense patterns against emerging threats.",
    },

    {
      feature:
        "Automated Mitigation",
      status:
        "ENABLED",
      details:
        "Autonomous mitigation workflows protecting assets and systems in real time.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Autonomous Defense Infrastructure
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered autonomous cybersecurity response and self-healing protection systems.
          </p>

        </div>

        <div className="grid gap-6">

          {systems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-emerald-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-emerald-500/10"
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

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
