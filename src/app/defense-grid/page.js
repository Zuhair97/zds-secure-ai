"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DefenseGridPage() {

  const defenses = [

    {
      engine:
        "Exploit Prevention Grid",
      latency:
        "12ms",
      status:
        "Active",
    },

    {
      engine:
        "AI Threat Correlation",
      latency:
        "8ms",
      status:
        "Synchronized",
    },

    {
      engine:
        "Autonomous Containment",
      latency:
        "15ms",
      status:
        "Operational",
    },

    {
      engine:
        "Predictive Attack Analysis",
      latency:
        "6ms",
      status:
        "Learning",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Operational":
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
              Machine-Speed Defense Grid
            </h1>

            <p className="text-zinc-400">
              Autonomous AI-powered cyber defense operating at machine speed.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            DEFENSE GRID ONLINE

          </div>

        </div>

        <div className="grid gap-6">

          {defenses.map(
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

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      Response Latency
                    </p>

                    <p className="text-5xl font-bold">
                      {item.latency}
                    </p>

                  </div>

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      AI Operational State
                    </p>

                    <p className="text-2xl font-bold">
                      Autonomous Defense Active
                    </p>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
