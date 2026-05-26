"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AISOCPage() {

  const systems = [

    {
      feature:
        "AI Alert Triage",
      status:
        "Operational",
      details:
        "AI automatically prioritizing cybersecurity alerts in real time.",
    },

    {
      feature:
        "Threat Hunting Engine",
      status:
        "Live",
      details:
        "Autonomous AI threat hunting and anomaly detection systems active.",
    },

    {
      feature:
        "Telemetry Correlation",
      status:
        "Analyzing",
      details:
        "Distributed telemetry and behavioral event correlation operational.",
    },

    {
      feature:
        "Incident Orchestration",
      status:
        "Protected",
      details:
        "Machine-speed AI incident response and containment infrastructure active.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Live":
        return "bg-red-500 text-white";

      case "Analyzing":
        return "bg-yellow-500 text-black";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-teal-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              AI Security Operations Center
            </h1>

            <p className="text-zinc-300 text-lg">
              Autonomous AI-powered cybersecurity operations and machine-speed defense infrastructure.
            </p>

          </div>

          <div className="bg-teal-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-teal-500/40">

            AI-SOC ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-teal-500/20 rounded-3xl p-6 shadow-2xl shadow-teal-500/10"
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
