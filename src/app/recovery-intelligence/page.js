"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function RecoveryIntelligencePage() {

  const assets = [

    {
      asset:
        "Primary Gmail Account",
      status:
        "Protected",
      activity:
        "No suspicious login activity detected.",
    },

    {
      asset:
        "MetaMask Wallet",
      status:
        "Monitoring",
      activity:
        "AI detected unusual wallet connection request.",
    },

    {
      asset:
        "Telegram Account",
      status:
        "Protected",
      activity:
        "Trusted session verified successfully.",
    },

    {
      asset:
        "Android Device",
      status:
        "Risk Detected",
      activity:
        "Unrecognized device fingerprint detected.",
    },

    {
      asset:
        "Binance Account",
      status:
        "Protected",
      activity:
        "2FA integrity verified.",
    },

  ];

  function getStatusColor(status) {

    switch (status) {

      case "Protected":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Risk Detected":
        return "bg-red-500 text-white";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Recovery Intelligence
            </h1>

            <p className="text-zinc-400">
              AI-powered digital identity recovery and asset tracking engine.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            RECOVERY MODE READY

          </div>

        </div>

        <div className="grid gap-6">

          {assets.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.asset}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {item.activity}
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
