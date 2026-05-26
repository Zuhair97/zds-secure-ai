"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DigitalTrustPage() {

  const trustSystems = [

    {
      feature:
        "AI Identity Trust Scoring",
      status:
        "Operational",
      details:
        "AI continuously evaluating digital identity trust and integrity.",
    },

    {
      feature:
        "Behavioral Verification",
      status:
        "Protected",
      details:
        "Behavior-based identity analysis and anomaly detection active.",
    },

    {
      feature:
        "Device Reputation Intelligence",
      status:
        "Analyzing",
      details:
        "AI assigning trust reputation to protected devices dynamically.",
    },

    {
      feature:
        "Enterprise Trust Framework",
      status:
        "Live",
      details:
        "Global enterprise-grade trust validation infrastructure operational.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-indigo-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              Digital Trust Fabric
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered digital identity verification and intelligent trust infrastructure.
            </p>

          </div>

          <div className="bg-indigo-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/40">

            TRUST ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {trustSystems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-indigo-500/20 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10"
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
