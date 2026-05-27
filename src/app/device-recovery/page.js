"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DeviceRecoveryPage() {

  const protections = [

    {
      feature:
        "Emergency Lockdown",
      status:
        "READY",
      details:
        "AI can instantly secure stolen or compromised devices.",
    },

    {
      feature:
        "SIM Change Detection",
      status:
        "ACTIVE",
      details:
        "Unauthorized SIM replacement attempts monitored continuously.",
    },

    {
      feature:
        "Recovery Intelligence",
      status:
        "MONITORING",
      details:
        "AI recovery systems analyzing suspicious device activity patterns.",
    },

    {
      feature:
        "Silent Anti-Theft Tracking",
      status:
        "ENABLED",
      details:
        "Protected recovery tracking and security alert systems operational.",
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
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Device Recovery Intelligence
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered anti-theft protection and intelligent device recovery systems.
          </p>

        </div>

        <div className="grid gap-6">

          {protections.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
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
