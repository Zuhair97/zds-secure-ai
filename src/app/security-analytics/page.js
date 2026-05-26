"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityAnalyticsPage() {

  const analytics = [

    {
      metric:
        "Threats Blocked",
      value:
        "12,847",
      details:
        "AI phishing and malware attacks neutralized successfully.",
    },

    {
      metric:
        "Protected Devices",
      value:
        "1,284",
      details:
        "Cross-platform protected devices synchronized globally.",
    },

    {
      metric:
        "AI Risk Score",
      value:
        "98%",
      details:
        "Real-time AI cybersecurity risk evaluation operational.",
    },

    {
      metric:
        "Wallet Security",
      value:
        "Secured",
      details:
        "Web3 wallet protection and smart contract defense active.",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-orange-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
              Security Analytics
            </h1>

            <p className="text-zinc-300 text-lg">
              Real-time AI cybersecurity analytics and live protection intelligence dashboard.
            </p>

          </div>

          <div className="bg-orange-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-orange-500/40">

            ANALYTICS LIVE

          </div>

        </div>

        <div className="grid gap-6">

          {analytics.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-orange-500/20 rounded-3xl p-6 shadow-2xl shadow-orange-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h2 className="text-3xl font-bold">
                      {item.metric}
                    </h2>

                    <p className="text-4xl font-extrabold mt-3 text-cyan-300">
                      {item.value}
                    </p>

                  </div>

                  <span className="px-4 py-1 rounded-full text-sm font-bold bg-cyan-500 text-black">

                    LIVE

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
