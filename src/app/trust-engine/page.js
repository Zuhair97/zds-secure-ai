"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function TrustEnginePage() {

  const trustSystems = [

    {
      feature:
        "Behavioral Trust Intelligence",
      status:
        "ACTIVE",
      details:
        "AI analyzing trusted and suspicious behavioral patterns in real time.",
    },

    {
      feature:
        "Fraud Reputation Detection",
      status:
        "MONITORING",
      details:
        "Adaptive fraud and risk reputation systems operational.",
    },

    {
      feature:
        "Risk-Based Trust Scoring",
      status:
        "VERIFIED",
      details:
        "Dynamic AI trust scoring and security confidence systems enabled.",
    },

    {
      feature:
        "Identity Consistency Verification",
      status:
        "READY",
      details:
        "AI validating identity integrity and trusted interaction patterns.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      case "VERIFIED":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-violet-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
            Global Trust Engine
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered trust intelligence and adaptive reputation security infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {trustSystems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-violet-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-violet-500/10"
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

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
