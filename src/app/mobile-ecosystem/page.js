"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function MobileEcosystemPage() {

  const systems = [

    {
      feature:
        "Android Security Layer",
      status:
        "Active",
      details:
        "AI mobile cybersecurity systems operational on Android.",
    },

    {
      feature:
        "iOS Protection Engine",
      status:
        "Integrated",
      details:
        "Secure Apple ecosystem architecture initialized.",
    },

    {
      feature:
        "Biometric Mobile Access",
      status:
        "Protected",
      details:
        "Fingerprint and facial authentication enabled.",
    },

    {
      feature:
        "Cross-Platform Synchronization",
      status:
        "Live",
      details:
        "AI synchronizing cybersecurity telemetry across devices.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Integrated":
        return "bg-cyan-500 text-black";

      case "Protected":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-blue-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Mobile Ecosystem
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered mobile cybersecurity and cross-platform protection infrastructure.
            </p>

          </div>

          <div className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-blue-500/40">

            MOBILE SYSTEM ONLINE

          </div>

        </div>

        <div className="grid gap-6">

          {systems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-3xl p-6 shadow-2xl shadow-blue-500/10"
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
