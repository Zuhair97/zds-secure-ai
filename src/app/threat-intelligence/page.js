"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatIntelligencePage() {

  const alerts = [

    {
      region:
        "Global Crypto Networks",
      level:
        "HIGH",
      details:
        "AI detected coordinated phishing infrastructure targeting Web3 users.",
    },

    {
      region:
        "North America",
      level:
        "MEDIUM",
      details:
        "Suspicious scam-token campaigns observed across multiple platforms.",
    },

    {
      region:
        "Europe",
      level:
        "LOW",
      details:
        "Increased malicious wallet-drainer activity under monitoring.",
    },

    {
      region:
        "Africa",
      level:
        "HIGH",
      details:
        "AI identified fraudulent investment and impersonation campaigns.",
    },

  ];

  function getColor(level) {

    switch (level) {

      case "HIGH":
        return "bg-red-500 text-white";

      case "MEDIUM":
        return "bg-yellow-500 text-black";

      default:
        return "bg-green-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-indigo-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            AI Threat Intelligence Network
          </h1>

          <p className="text-zinc-300 text-lg">
            Global AI-powered cyber awareness and threat intelligence infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {alerts.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-indigo-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-3xl font-bold">
                  {item.region}
                </h2>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.level)}`}>

                  {item.level}

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
