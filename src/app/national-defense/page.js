"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function NationalDefensePage() {

  const infrastructures = [

    {
      sector:
        "Financial Infrastructure",
      status:
        "Protected",
      details:
        "AI monitoring coordinated financial cyber threats.",
    },

    {
      sector:
        "Communication Networks",
      status:
        "Monitoring",
      details:
        "Distributed anomaly detection systems active.",
    },

    {
      sector:
        "Critical Digital Services",
      status:
        "Secured",
      details:
        "Infrastructure resilience integrity verified.",
    },

    {
      sector:
        "Regional Threat Intelligence",
      status:
        "Scanning",
      details:
        "AI correlating multi-region cyber attack telemetry.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Protected":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Scanning":
        return "bg-blue-500 text-black";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              National Cyber Defense
            </h1>

            <p className="text-zinc-400">
              AI-powered large-scale cyber defense coordination and infrastructure protection intelligence.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            DEFENSE GRID SYNCHRONIZED

          </div>

        </div>

        <div className="grid gap-6">

          {infrastructures.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.sector}
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
