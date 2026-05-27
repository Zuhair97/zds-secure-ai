"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ActiveDefensePage() {

  const defenses = [

    {
      feature:
        "Automatic Threat Blocking",
      status:
        "ACTIVE",
      details:
        "AI automatically blocking malicious infrastructure and phishing activity.",
    },

    {
      feature:
        "Wallet Protection",
      status:
        "PROTECTED",
      details:
        "Suspicious wallet interactions and risky approvals isolated instantly.",
    },

    {
      feature:
        "Session Lockdown",
      status:
        "MONITORING",
      details:
        "Compromised sessions automatically restricted and secured.",
    },

    {
      feature:
        "Emergency Defense Mode",
      status:
        "READY",
      details:
        "AI emergency mitigation and autonomous cyber response systems operational.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "PROTECTED":
        return "bg-cyan-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-orange-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
            Active AI Defense
          </h1>

          <p className="text-zinc-300 text-lg">
            Autonomous AI-powered threat response and machine-speed cyber defense infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {defenses.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-orange-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-orange-500/10"
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
