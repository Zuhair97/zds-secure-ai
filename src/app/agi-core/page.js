"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AGICorePage() {

  const systems = [

    {
      engine:
        "Autonomous Reasoning Core",
      status:
        "Active",
      details:
        "AI coordinating adaptive cybersecurity decision-making.",
    },

    {
      engine:
        "Multi-Agent Defense Network",
      status:
        "Synchronized",
      details:
        "Distributed AI defense agents operating collaboratively.",
    },

    {
      engine:
        "Predictive Threat Intelligence",
      status:
        "Learning",
      details:
        "AI forecasting evolving cyber attack behaviors.",
    },

    {
      engine:
        "Self-Improving Security Layer",
      status:
        "Operational",
      details:
        "Defense intelligence continuously adapting autonomously.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Synchronized":
        return "bg-cyan-500 text-black";

      case "Learning":
        return "bg-yellow-500 text-black";

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
              AGI Cybersecurity Core
            </h1>

            <p className="text-zinc-400">
              Autonomous AI reasoning and self-evolving cybersecurity intelligence architecture.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            AGI CORE ONLINE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.engine}
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
