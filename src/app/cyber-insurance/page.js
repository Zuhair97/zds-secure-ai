"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CyberInsurancePage() {

  const assessments = [

    {
      category:
        "Wallet Exposure Risk",
      score:
        "Low",
      details:
        "AI detected strong wallet interaction hygiene.",
    },

    {
      category:
        "Phishing Exposure",
      score:
        "Medium",
      details:
        "Recent suspicious communication patterns analyzed.",
    },

    {
      category:
        "Device Security Resilience",
      score:
        "High",
      details:
        "Protected device environment verified successfully.",
    },

    {
      category:
        "Recovery Readiness",
      score:
        "Optimized",
      details:
        "AI recovery preparedness systems fully active.",
    },

  ];

  function getColor(score) {

    switch (score) {

      case "Low":
        return "bg-green-500 text-black";

      case "Medium":
        return "bg-yellow-500 text-black";

      case "High":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Cyber Insurance Engine
            </h1>

            <p className="text-zinc-400">
              AI-powered digital cyber risk intelligence and autonomous resilience assessment.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            RISK ENGINE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {assessments.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.category}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.score)}`}>

                    {item.score}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

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
