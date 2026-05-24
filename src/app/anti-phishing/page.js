"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AntiPhishingPage() {

  const threats = [

    {
      title:
        "Wallet Drainer Contract",
      severity: "Critical",
      description:
        "AI detected malicious smart contract approval attempt.",
      action:
        "Transaction blocked automatically.",
    },

    {
      title:
        "Fake Exchange Login",
      severity: "High",
      description:
        "Suspicious phishing domain mimicking trusted exchange.",
      action:
        "Browser session isolated.",
    },

    {
      title:
        "Malicious Airdrop",
      severity: "High",
      description:
        "AI identified suspicious token claiming interface.",
      action:
        "Wallet interaction restricted.",
    },

    {
      title:
        "Safe Wallet Session",
      severity: "Protected",
      description:
        "AI verified trusted decentralized application behavior.",
      action:
        "Monitoring active.",
    },

  ];

  function getStyles(level) {

    switch (level) {

      case "Critical":
        return "bg-red-950 border-red-700";

      case "High":
        return "bg-orange-950 border-orange-700";

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
              AI Anti-Phishing Shield
            </h1>

            <p className="text-zinc-400">
              Real-time AI protection against phishing and wallet drainer attacks.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            SHIELD ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {threats.map(
            (threat, index) => (

              <div
                key={index}
                className={`rounded-2xl border p-6 ${getStyles(threat.severity)}`}
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {threat.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    threat.severity ===
                    "Critical"
                      ? "bg-red-500 text-white"
                      : threat.severity ===
                        "High"
                      ? "bg-orange-500 text-black"
                      : "bg-green-500 text-black"
                  }`}>

                    {threat.severity}

                  </span>

                </div>

                <p className="text-zinc-200 text-lg leading-8 mb-5">
                  {threat.description}
                </p>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-400 mb-2">
                    Autonomous AI Action
                  </p>

                  <p className="text-2xl font-bold">
                    {threat.action}
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
