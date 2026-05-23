"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function GlobalIntelPage() {

  const threats = [
    {
      country: "United States",
      level: "Medium",
      attacks: 12,
    },

    {
      country: "Germany",
      level: "Low",
      attacks: 4,
    },

    {
      country: "China",
      level: "High",
      attacks: 28,
    },

    {
      country: "United Kingdom",
      level: "Medium",
      attacks: 9,
    },

    {
      country: "Nigeria",
      level: "Low",
      attacks: 3,
    },
  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Global Threat Intelligence
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered global cybersecurity awareness and threat intelligence network.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Active Regions
            </h2>

            <p className="text-5xl font-bold">
              5
            </p>
          </div>

          <div className="bg-red-950 border border-red-700 rounded-2xl p-6">
            <h2 className="text-red-400 mb-2">
              Detected Threats
            </h2>

            <p className="text-5xl font-bold">
              56
            </p>
          </div>

          <div className="bg-blue-950 border border-blue-700 rounded-2xl p-6">
            <h2 className="text-blue-400 mb-2">
              AI Monitoring
            </h2>

            <p className="text-5xl font-bold">
              LIVE
            </p>
          </div>

        </div>

        <div className="grid gap-6 mb-10">

          {threats.map((item, index) => (

            <div
              key={index}
              className={`rounded-2xl p-6 border ${
                item.level === "High"
                  ? "bg-red-950 border-red-700"
                  : item.level === "Medium"
                  ? "bg-yellow-950 border-yellow-700"
                  : "bg-green-950 border-green-700"
              }`}
            >

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-3xl font-bold">
                  {item.country}
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

              <p className="text-lg">
                AI detected{" "}
                <span className="font-bold">
                  {item.attacks}
                </span>{" "}
                suspicious threat events.
              </p>

            </div>

          ))}

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            AI Executive Summary
          </h2>

          <p className="text-zinc-300 text-lg leading-8">

            ZDS Secure AI continuously monitors global threat activity,
            analyzes cyber attack patterns,
            evaluates regional intelligence,
            and generates enterprise-grade AI cybersecurity insights
            for proactive digital defense.

          </p>

        </div>

      </main>

    </ProtectedRoute>
  );
}
