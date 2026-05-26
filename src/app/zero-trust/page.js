"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ZeroTrustPage() {

  const systems = [

    {
      feature:
        "Continuous Authentication",
      status:
        "Operational",
      details:
        "AI continuously validating user identity and behavioral integrity.",
    },

    {
      feature:
        "Device Trust Intelligence",
      status:
        "Protected",
      details:
        "Dynamic device trust scoring and suspicious endpoint monitoring active.",
    },

    {
      feature:
        "Adaptive Access Control",
      status:
        "Analyzing",
      details:
        "AI-driven privilege management and contextual access verification operational.",
    },

    {
      feature:
        "Session Threat Detection",
      status:
        "Live",
      details:
        "Real-time session anomaly analysis and autonomous restriction systems active.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      case "Analyzing":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-neutral-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-neutral-300 to-cyan-400 text-transparent bg-clip-text">
              Zero Trust Architecture
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered zero-trust cybersecurity and continuous identity verification infrastructure.
            </p>

          </div>

          <div className="bg-neutral-300 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-neutral-300/40">

            ZERO TRUST ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-neutral-400/20 rounded-3xl p-6 shadow-2xl shadow-neutral-400/10"
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

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
