"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CommandCenterPage() {

  const systems = [

    {
      name: "AI Threat Intelligence",
      status: "ACTIVE",
    },

    {
      name: "Fraud Protection",
      status: "SECURED",
    },

    {
      name: "Wallet Defense",
      status: "MONITORING",
    },

    {
      name: "Trading Guardian",
      status: "ACTIVE",
    },

    {
      name: "Identity Protection",
      status: "SECURED",
    },

    {
      name: "Autonomous Defense",
      status: "READY",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "SECURED":
        return "bg-cyan-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-slate-300 text-transparent bg-clip-text">
            AI Command Center
          </h1>

          <p className="text-zinc-300 text-lg">
            Unified global AI cybersecurity operations and autonomous defense hub.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {systems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                  {item.status}

                </span>

              </div>

              <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                <p className="text-zinc-300 text-lg">
                  AI operational monitoring and autonomous protection systems active.
                </p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
