"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatExchangePage() {

  const exchanges = [

    {
      feature:
        "Global Threat Intelligence",
      status:
        "Operational",
      details:
        "AI aggregating and correlating cyber threat intelligence worldwide.",
    },

    {
      feature:
        "Phishing Intelligence Exchange",
      status:
        "Protected",
      details:
        "Distributed phishing and scam intelligence synchronization active.",
    },

    {
      feature:
        "Malware Correlation Engine",
      status:
        "Analyzing",
      details:
        "AI correlating malware indicators and coordinated attack infrastructure.",
    },

    {
      feature:
        "Machine-Speed Threat Sharing",
      status:
        "Live",
      details:
        "Autonomous global cyber intelligence propagation and alert distribution active.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      case "Analyzing":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-indigo-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              Threat Exchange Network
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered global cyber threat intelligence sharing and distributed attack correlation infrastructure.
            </p>

          </div>

          <div className="bg-indigo-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/40">

            THREAT EXCHANGE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {exchanges.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-indigo-500/20 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10"
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
