"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function TrustNetworkPage() {

  const trustSystems = [

    {
      system:
        "Behavior Analysis Engine",
      status:
        "ACTIVE",
      details:
        "AI evaluating behavioral activity and trust-risk indicators.",
    },

    {
      system:
        "Wallet Reputation Intelligence",
      status:
        "READY",
      details:
        "Blockchain reputation analysis and suspicious wallet intelligence infrastructure.",
    },

    {
      system:
        "Device Trust Verification",
      status:
        "CONNECTED",
      details:
        "Trusted-device validation and ownership confidence analysis systems.",
    },

    {
      system:
        "Fraud Reputation Monitoring",
      status:
        "MONITORING",
      details:
        "AI tracking fraud indicators and suspicious reputation patterns.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      case "CONNECTED":
        return "bg-purple-500 text-white";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-teal-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
            Global Trust Network
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered trust intelligence, reputation analysis and fraud-risk evaluation infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {trustSystems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-teal-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-teal-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.system}
                  </h2>

                  <p className="text-zinc-400 mt-2 text-lg">
                    {item.details}
                  </p>

                </div>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                  {item.status}

                </span>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
