"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function LiveThreatPage() {

  const feeds = [

    {
      source:
        "Phishing Intelligence Feed",
      status:
        "Live",
      details:
        "Real-time phishing infrastructure monitoring active.",
    },

    {
      source:
        "Malware Threat Feed",
      status:
        "Analyzing",
      details:
        "AI correlating malware indicators and attack telemetry.",
    },

    {
      source:
        "Suspicious IP Intelligence",
      status:
        "Protected",
      details:
        "Dynamic IP reputation monitoring operational.",
    },

    {
      source:
        "AI Threat Classification",
      status:
        "Operational",
      details:
        "Real-time AI threat scoring systems active.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Live":
        return "bg-green-500 text-black";

      case "Analyzing":
        return "bg-yellow-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-cyan-400 text-transparent bg-clip-text">
              Live Threat Intelligence
            </h1>

            <p className="text-zinc-300 text-lg">
              Real-time AI cybersecurity intelligence and live threat monitoring ecosystem.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-red-500/40">

            LIVE FEEDS ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {feeds.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-red-500/20 rounded-3xl p-6 shadow-2xl shadow-red-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.source}
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
