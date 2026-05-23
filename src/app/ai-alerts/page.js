"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AIAlertsPage() {

  const alerts = [

    {
      title:
        "Suspicious Session Detected",
      level: "Critical",
      message:
        "AI isolated a suspicious session automatically.",
      time:
        "2 mins ago",
    },

    {
      title:
        "Geo-Risk Warning",
      level: "High",
      message:
        "Authentication attempt detected from risky geographic region.",
      time:
        "10 mins ago",
    },

    {
      title:
        "Trusted Device Verified",
      level: "Protected",
      message:
        "AI successfully validated trusted device identity.",
      time:
        "18 mins ago",
    },

    {
      title:
        "Predictive Threat Forecast",
      level: "Medium",
      message:
        "AI predicts elevated credential attack probability.",
      time:
        "35 mins ago",
    },

  ];

  function getStyles(level) {

    switch (level) {

      case "Critical":
        return "bg-red-950 border-red-700";

      case "High":
        return "bg-orange-950 border-orange-700";

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
              AI Alert Center
            </h1>

            <p className="text-zinc-400">
              Real-time AI-powered cybersecurity alerts and notifications.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            LIVE ALERTS

          </div>

        </div>

        <div className="grid gap-6">

          {alerts.map(
            (alert, index) => (

              <div
                key={index}
                className={`rounded-2xl border p-6 ${getStyles(alert.level)}`}
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {alert.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    alert.level ===
                    "Critical"
                      ? "bg-red-500 text-white"
                      : alert.level ===
                        "High"
                      ? "bg-orange-500 text-black"
                      : alert.level ===
                        "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-500 text-black"
                  }`}>

                    {alert.level}

                  </span>

                </div>

                <p className="text-zinc-200 text-lg leading-8 mb-5">
                  {alert.message}
                </p>

                <div className="bg-black border border-zinc-800 rounded-xl p-4">

                  <p className="text-zinc-400">
                    Alert Time:
                    {" "}
                    <span className="font-bold text-white">
                      {alert.time}
                    </span>
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
