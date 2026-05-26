"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ZeroTrustPage() {

  const systems = [

    {
      feature:
        "Continuous Identity Verification",
      status:
        "Operational",
      details:
        "AI continuously validating user and session integrity.",
    },

    {
      feature:
        "Device Trust Scoring",
      status:
        "Protected",
      details:
        "Behavioral AI assigning dynamic trust scores to devices.",
    },

    {
      feature:
        "Adaptive Access Control",
      status:
        "Live",
      details:
        "Autonomous access permissions adjusting based on risk analysis.",
    },

    {
      feature:
        "Machine Identity Governance",
      status:
        "Synchronized",
      details:
        "AI agents and machine identities monitored securely.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-yellow-500 text-black";

      case "Live":
        return "bg-red-500 text-white";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-blue-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Zero Trust Security
            </h1>

            <p className="text-zinc-300 text-lg">
              Autonomous AI zero-trust cybersecurity and continuous verification infrastructure.
            </p>

          </div>

          <div className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-blue-500/40">

            ZERO TRUST ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-3xl p-6 shadow-2xl shadow-blue-500/10"
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
