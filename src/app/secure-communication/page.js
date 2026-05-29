"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecureCommunicationPage() {

  const channels = [

    {
      channel:
        "Encrypted In-App Alerts",
      status:
        "ACTIVE",
      details:
        "AI trusted notification and secure alert delivery systems operational.",
    },

    {
      channel:
        "WhatsApp Security Integration",
      status:
        "READY",
      details:
        "Protected emergency messaging and verified communication workflows enabled.",
    },

    {
      channel:
        "Telegram Intelligence Alerts",
      status:
        "CONNECTED",
      details:
        "AI cyber intelligence and secure Telegram alert infrastructure active.",
    },

    {
      channel:
        "Recovery Notification System",
      status:
        "MONITORING",
      details:
        "Encrypted recovery instructions and trusted communication validation operational.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      case "CONNECTED":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-300 to-cyan-400 text-transparent bg-clip-text">
            Secure Communication Infrastructure
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered encrypted alerts and trusted cybersecurity communication systems.
          </p>

        </div>

        <div className="grid gap-6">

          {channels.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-slate-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-slate-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.channel}
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
