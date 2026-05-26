"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatIntelligencePage() {

  const intelligence = [

    {
      region:
        "North America",
      status:
        "Monitoring",
      details:
        "AI analyzing phishing and credential theft infrastructure.",
    },

    {
      region:
        "Europe",
      status:
        "Protected",
      details:
        "Distributed malware intelligence systems operational.",
    },

    {
      region:
        "Africa",
      status:
        "Live",
      details:
        "Localized AI cybersecurity telemetry and attack monitoring active.",
    },

    {
      region:
        "Asia-Pacific",
      status:
        "Analyzing",
      details:
        "Real-time suspicious activity pattern recognition operational.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Protected":
        return "bg-green-500 text-black";

      case "Live":
        return "bg-red-500 text-white";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-cyan-400 text-transparent bg-clip-text">
              Threat Intelligence Network
            </h1>

            <p className="text-zinc-300 text-lg">
              Global AI cybersecurity intelligence and real-time worldwide threat monitoring.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-red-500/40">

            GLOBAL INTEL LIVE

          </div>

        </div>

        <div className="grid gap-6">

          {intelligence.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-red-500/20 rounded-3xl p-6 shadow-2xl shadow-red-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.region}
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
