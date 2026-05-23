"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function PredictiveAnalyticsPage() {

  const predictions = [

    {
      title:
        "Credential Attack Forecast",
      probability: "87%",
      level: "High",
      description:
        "AI predicts increased credential attack activity based on login anomalies and behavioral patterns.",
    },

    {
      title:
        "Geo-Risk Escalation",
      probability: "72%",
      level: "Medium",
      description:
        "Repeated risky geographic authentication attempts indicate possible escalation.",
    },

    {
      title:
        "Device Trust Deviation",
      probability: "65%",
      level: "Medium",
      description:
        "Unknown device activity suggests rising session compromise probability.",
    },

    {
      title:
        "Autonomous Defense Readiness",
      probability: "94%",
      level: "Protected",
      description:
        "AI defense systems are fully prepared for rapid autonomous containment.",
    },

  ];

  function getStyles(level) {

    switch (level) {

      case "High":
        return "bg-red-950 border-red-700";

      case "Medium":
        return "bg-yellow-950 border-yellow-700";

      default:
        return "bg-green-950 border-green-700";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              AI Predictive Analytics
            </h1>

            <p className="text-zinc-400">
              Predictive AI intelligence for proactive cyber defense.
            </p>

          </div>

          <div className="bg-purple-500 text-white px-5 py-2 rounded-full font-bold">

            AI FORECAST ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {predictions.map(
            (item, index) => (

              <div
                key={index}
                className={`rounded-2xl border p-6 ${getStyles(item.level)}`}
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    item.level === "High"
                      ? "bg-red-500 text-white"
                      : item.level === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-500 text-black"
                  }`}>

                    {item.level}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5 mb-5">

                  <p className="text-zinc-400 mb-2">
                    Threat Probability
                  </p>

                  <p className="text-5xl font-bold">
                    {item.probability}
                  </p>

                </div>

                <p className="text-zinc-200 text-lg leading-8">
                  {item.description}
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
