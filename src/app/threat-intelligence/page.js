"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatIntelligencePage() {

  const feeds = [

    {
      title:
        "Phishing Infrastructure",
      severity: "High",
      source:
        "Global Threat Feed",
      description:
        "AI detected activity patterns matching known phishing campaigns.",
    },

    {
      title:
        "Suspicious Geo Activity",
      severity:
        "Medium",
      source:
        "Geo Intelligence",
      description:
        "Multiple risky authentication attempts detected from high-risk regions.",
    },

    {
      title:
        "Credential Attack Pattern",
      severity: "Critical",
      source:
        "AI Correlation Engine",
      description:
        "Behavioral patterns resemble credential stuffing activity.",
    },

    {
      title:
        "Device Reputation Alert",
      severity:
        "Medium",
      source:
        "Device Trust Engine",
      description:
        "Unknown device behavior deviates from trusted session history.",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              AI Threat Intelligence
            </h1>

            <p className="text-zinc-400">
              Real-time AI-powered cyber intelligence and threat correlation.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            LIVE FEED

          </div>

        </div>

        <div className="grid gap-6">

          {feeds.map(
            (item, index) => (

              <div
                key={index}
                className={`rounded-2xl p-6 border ${
                  item.severity ===
                  "Critical"
                    ? "bg-red-950 border-red-700"
                    : item.severity ===
                      "High"
                    ? "bg-orange-950 border-orange-700"
                    : "bg-yellow-950 border-yellow-700"
                }`}
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    item.severity ===
                    "Critical"
                      ? "bg-red-500 text-white"
                      : item.severity ===
                        "High"
                      ? "bg-orange-500 text-black"
                      : "bg-yellow-500 text-black"
                  }`}>

                    {item.severity}

                  </span>

                </div>

                <p className="text-zinc-300 mb-5 text-lg leading-8">
                  {item.description}
                </p>

                <div className="bg-black border border-zinc-800 rounded-xl p-4">

                  <p className="text-zinc-400">
                    Intelligence Source:
                    {" "}
                    <span className="font-bold text-white">
                      {item.source}
                    </span>
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
