"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function PredictiveDefensePage() {

  const forecasts = [

    {
      feature:
        "Threat Forecasting Engine",
      status:
        "Operational",
      details:
        "AI analyzing behavioral patterns and predicting cyber attack probability.",
    },

    {
      feature:
        "Early Warning Alerts",
      status:
        "Protected",
      details:
        "Machine-speed predictive alerts against emerging threats and suspicious activity.",
    },

    {
      feature:
        "Anomaly Trend Intelligence",
      status:
        "Analyzing",
      details:
        "AI correlating telemetry trends and identifying pre-attack indicators.",
    },

    {
      feature:
        "Autonomous Risk Prediction",
      status:
        "Live",
      details:
        "Continuous forecasting of phishing, malware, and fraud campaigns globally.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-fuchsia-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Predictive Defense
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered cyber forecasting and autonomous early warning infrastructure.
            </p>

          </div>

          <div className="bg-fuchsia-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-fuchsia-500/40">

            FORECAST ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {forecasts.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-fuchsia-500/20 rounded-3xl p-6 shadow-2xl shadow-fuchsia-500/10"
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
