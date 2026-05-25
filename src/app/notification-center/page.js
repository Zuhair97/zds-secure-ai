"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function NotificationCenterPage() {

  const alerts = [

    {
      type:
        "Suspicious Login Attempt",
      status:
        "Critical",
      details:
        "AI detected login attempt from unrecognized device.",
    },

    {
      type:
        "Phishing Link Blocked",
      status:
        "Protected",
      details:
        "Malicious credential harvesting link blocked automatically.",
    },

    {
      type:
        "Wallet Risk Alert",
      status:
        "Warning",
      details:
        "High-risk smart contract interaction detected.",
    },

    {
      type:
        "AI Threat Notification",
      status:
        "Live",
      details:
        "Real-time cybersecurity intelligence updates operational.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Critical":
        return "bg-red-500 text-white";

      case "Protected":
        return "bg-green-500 text-black";

      case "Warning":
        return "bg-yellow-500 text-black";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-orange-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
              Notification Center
            </h1>

            <p className="text-zinc-300 text-lg">
              Real-time AI cybersecurity alerts and autonomous user protection notifications.
            </p>

          </div>

          <div className="bg-orange-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-orange-500/40">

            ALERT SYSTEM ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {alerts.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-orange-500/20 rounded-3xl p-6 shadow-2xl shadow-orange-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.type}
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
