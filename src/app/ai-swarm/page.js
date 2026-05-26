"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AISwarmPage() {

  const swarm = [

    {
      agent:
        "Threat Hunter Swarm",
      status:
        "Operational",
      details:
        "Distributed AI agents autonomously identifying malicious infrastructure.",
    },

    {
      agent:
        "Incident Response Swarm",
      status:
        "Protected",
      details:
        "Coordinated machine-speed cyber incident mitigation active.",
    },

    {
      agent:
        "Telemetry Analysis Swarm",
      status:
        "Analyzing",
      details:
        "AI agents correlating distributed telemetry and anomaly behavior.",
    },

    {
      agent:
        "Recovery Swarm",
      status:
        "Live",
      details:
        "Autonomous AI infrastructure recovery and resilience systems active.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              AI Defense Swarm
            </h1>

            <p className="text-zinc-300 text-lg">
              Autonomous multi-agent AI cybersecurity coordination and distributed defense systems.
            </p>

          </div>

          <div className="bg-purple-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-purple-500/40">

            SWARM ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {swarm.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-3xl p-6 shadow-2xl shadow-purple-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.agent}
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
