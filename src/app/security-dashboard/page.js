"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityDashboardPage() {

  const stats = [

    {
      title: "AI Protection Status",
      value: "ACTIVE",
      color: "text-green-400",
    },

    {
      title: "Threats Blocked",
      value: "128",
      color: "text-red-400",
    },

    {
      title: "Trust Score",
      value: "98%",
      color: "text-cyan-400",
    },

    {
      title: "Security Health",
      value: "Excellent",
      color: "text-violet-400",
    },

  ];

  const activities = [

    "AI blocked suspicious phishing domain.",
    "Wallet security scan completed successfully.",
    "Threat intelligence synchronized globally.",
    "No active vulnerabilities detected.",
    "AI monitoring systems operational.",

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-cyan-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            AI Security Dashboard
          </h1>

          <p className="text-zinc-300 text-lg">
            Real-time AI protection visibility and intelligent cybersecurity monitoring.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
            >

              <h2 className="text-zinc-400 text-lg mb-3">
                {item.title}
              </h2>

              <p className={`text-4xl font-extrabold ${item.color}`}>
                {item.value}
              </p>

            </div>

          ))}

        </div>

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

          <h2 className="text-3xl font-bold mb-6 text-cyan-300">
            Live AI Activity Feed
          </h2>

          <div className="space-y-4">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="bg-black/40 border border-zinc-800 rounded-2xl p-5"
              >

                <p className="text-zinc-300 text-lg">
                  {activity}
                </p>

              </div>

            ))}

          </div>

        </div>

      </main>

    </ProtectedRoute>
  );
}
