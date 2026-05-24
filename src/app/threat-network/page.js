"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatNetworkPage() {

  const threats = [

    {
      title:
        "Wallet Drainer Campaign",
      severity: "Critical",
      region:
        "Global",
      description:
        "AI identified coordinated wallet draining infrastructure targeting Web3 users.",
    },

    {
      title:
        "Credential Theft Cluster",
      severity: "High",
      region:
        "Europe",
      description:
        "Suspicious phishing infrastructure impersonating trusted login providers.",
    },

    {
      title:
        "Malicious Browser Extension",
      severity: "High",
      region:
        "North America",
      description:
        "AI detected extension abusing browser session tokens.",
    },

    {
      title:
        "Fake Airdrop Infrastructure",
      severity: "Medium",
      region:
        "Asia",
      description:
        "Scam token distribution network detected by AI intelligence.",
    },

  ];

  function getSeverity(level) {

    switch (level) {

      case "Critical":
        return "bg-red-500 text-white";

      case "High":
        return "bg-orange-500 text-black";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Threat Intelligence Network
            </h1>

            <p className="text-zinc-400">
              Global AI-powered cyber threat intelligence and attack correlation engine.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            GLOBAL THREAT MONITORING ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {threats.map(
            (threat, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {threat.title}
                  </h2>

                  <div className="flex gap-3">

                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${getSeverity(threat.severity)}`}>

                      {threat.severity}

                    </span>

                    <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                      {threat.region}

                    </span>

                  </div>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {threat.description}
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
