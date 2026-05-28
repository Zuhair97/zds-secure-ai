"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatMapPage() {

  const threats = [

    {
      region:
        "West Africa",
      level:
        "ELEVATED",
      threat:
        "Phishing Activity",
    },

    {
      region:
        "Europe",
      level:
        "MODERATE",
      threat:
        "Fraud Infrastructure",
    },

    {
      region:
        "Middle East",
      level:
        "HIGH",
      threat:
        "Wallet Compromise Attempts",
    },

    {
      region:
        "North America",
      level:
        "MONITORING",
      threat:
        "Enterprise Threat Activity",
    },

  ];

  function getColor(level) {

    switch (level) {

      case "HIGH":
        return "bg-red-500 text-white";

      case "ELEVATED":
        return "bg-yellow-500 text-black";

      case "MODERATE":
        return "bg-cyan-500 text-black";

      default:
        return "bg-green-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-cyan-400 text-transparent bg-clip-text">
            Global Threat Intelligence Map
          </h1>

          <p className="text-zinc-300 text-lg">
            Real-time AI cyber intelligence and global threat monitoring infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {threats.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-red-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-red-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.region}
                  </h2>

                  <p className="text-zinc-400 mt-2 text-lg">
                    {item.threat}
                  </p>

                </div>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.level)}`}>

                  {item.level}

                </span>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
