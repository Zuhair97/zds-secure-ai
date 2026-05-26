"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function FraudIntelligencePage() {

  const fraudSystems = [

    {
      feature:
        "AI Fraud Detection",
      status:
        "Operational",
      details:
        "AI continuously analyzing suspicious financial activities and fraud attempts.",
    },

    {
      feature:
        "Payment Protection",
      status:
        "Protected",
      details:
        "Real-time phishing payment and scam transfer detection active.",
    },

    {
      feature:
        "Financial Risk Scoring",
      status:
        "Analyzing",
      details:
        "AI calculating dynamic financial transaction risk levels.",
    },

    {
      feature:
        "Account Takeover Defense",
      status:
        "Live",
      details:
        "Continuous monitoring against unauthorized access and credential abuse.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-rose-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-rose-400 to-cyan-400 text-transparent bg-clip-text">
              Fraud Intelligence
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered financial fraud detection and real-time scam intelligence systems.
            </p>

          </div>

          <div className="bg-rose-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-rose-500/40">

            FRAUD SHIELD ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {fraudSystems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-rose-500/20 rounded-3xl p-6 shadow-2xl shadow-rose-500/10"
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
