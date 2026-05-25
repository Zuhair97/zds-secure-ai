"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function GlobalLaunchPage() {

  const systems = [

    {
      system:
        "Production Infrastructure",
      status:
        "Online",
      details:
        "Enterprise-grade deployment systems operational.",
    },

    {
      system:
        "Global CDN Network",
      status:
        "Synchronized",
      details:
        "Distributed delivery architecture active globally.",
    },

    {
      system:
        "AI Observability Engine",
      status:
        "Monitoring",
      details:
        "Real-time platform telemetry and analytics operational.",
    },

    {
      system:
        "Premium Ecosystem",
      status:
        "Prepared",
      details:
        "Subscription and onboarding architecture initialized.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Online":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Synchronized":
        return "bg-cyan-500 text-black";

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
              Global Launch Infrastructure
            </h1>

            <p className="text-zinc-400">
              Production-grade cybersecurity ecosystem and enterprise deployment architecture.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            GLOBAL SYSTEM ONLINE

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
                    {item.system}
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
