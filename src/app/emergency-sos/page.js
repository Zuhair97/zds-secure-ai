"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function EmergencySOSPage() {

  const systems = [

    {
      feature:
        "Emergency SOS",
      status:
        "ACTIVE",
      details:
        "AI emergency protection and rapid alert activation ready.",
    },

    {
      feature:
        "Trusted Guardians",
      status:
        "CONNECTED",
      details:
        "Emergency contacts and trusted recovery assistance operational.",
    },

    {
      feature:
        "Panic Protection",
      status:
        "READY",
      details:
        "Instant anti-snatching and emergency defense systems enabled.",
    },

    {
      feature:
        "Recovery Workflows",
      status:
        "MONITORING",
      details:
        "AI coordinating recovery assistance and security escalation workflows.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "CONNECTED":
        return "bg-cyan-500 text-black";

      case "READY":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
            Emergency SOS Network
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered emergency response and trusted guardian protection infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {systems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-red-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-red-500/10"
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
