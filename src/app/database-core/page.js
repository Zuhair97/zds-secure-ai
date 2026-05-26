"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DatabaseCorePage() {

  const systems = [

    {
      feature:
        "Persistent User Storage",
      status:
        "Active",
      details:
        "AI cybersecurity user data persistence initialized.",
    },

    {
      feature:
        "Threat History Database",
      status:
        "Operational",
      details:
        "Security telemetry and incident history storage active.",
    },

    {
      feature:
        "Cloud Synchronization",
      status:
        "Live",
      details:
        "Cross-device cloud synchronization systems operational.",
    },

    {
      feature:
        "Realtime Backend Infrastructure",
      status:
        "Protected",
      details:
        "Scalable AI backend and database systems secured.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Operational":
        return "bg-cyan-500 text-black";

      case "Live":
        return "bg-red-500 text-white";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Database Core
            </h1>

            <p className="text-zinc-300 text-lg">
              Persistent AI cybersecurity backend and scalable database infrastructure.
            </p>

          </div>

          <div className="bg-emerald-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-emerald-500/40">

            DATABASE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-emerald-500/20 rounded-3xl p-6 shadow-2xl shadow-emerald-500/10"
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
