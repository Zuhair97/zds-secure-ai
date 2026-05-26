"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AISOCPage() {

  const operations = [

    {
      feature:
        "Global Threat Telemetry",
      status:
        "Operational",
      details:
        "AI collecting and correlating distributed cybersecurity telemetry worldwide.",
    },

    {
      feature:
        "Autonomous Incident Coordination",
      status:
        "Protected",
      details:
        "Machine-speed orchestration of AI defense agents and mitigation systems.",
    },

    {
      feature:
        "Threat Visualization Engine",
      status:
        "Analyzing",
      details:
        "Real-time cyber attack heatmaps and intelligent infrastructure monitoring active.",
    },

    {
      feature:
        "Distributed AI Defense Network",
      status:
        "Live",
      details:
        "Global autonomous AI defense coordination and cyber resilience operational.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-cyan-400 text-transparent bg-clip-text">
              AI Security Operations Center
            </h1>

            <p className="text-zinc-300 text-lg">
              Centralized AI cybersecurity intelligence, autonomous defense, and global threat coordination.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-red-500/40">

            AI-SOC ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {operations.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-red-500/20 rounded-3xl p-6 shadow-2xl shadow-red-500/10"
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
