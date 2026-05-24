"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CyberSimulationPage() {

  const simulations = [

    {
      scenario:
        "Wallet Drainer Attack",
      result:
        "Contained",
      score:
        "96%",
    },

    {
      scenario:
        "Phishing Campaign Simulation",
      result:
        "Detected",
      score:
        "92%",
    },

    {
      scenario:
        "Credential Theft Attempt",
      result:
        "Blocked",
      score:
        "94%",
    },

    {
      scenario:
        "Browser Session Hijack",
      result:
        "Mitigated",
      score:
        "89%",
    },

  ];

  function getResultColor(result) {

    switch (result) {

      case "Contained":
        return "bg-green-500 text-black";

      case "Detected":
        return "bg-yellow-500 text-black";

      case "Blocked":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Cyber Simulation Lab
            </h1>

            <p className="text-zinc-400">
              AI-powered cyber war-game simulation and digital twin resilience testing.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            SIMULATION ENGINE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {simulations.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.scenario}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getResultColor(item.result)}`}>

                    {item.result}

                  </span>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      AI Readiness Score
                    </p>

                    <p className="text-5xl font-bold">
                      {item.score}
                    </p>

                  </div>

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      Simulation Status
                    </p>

                    <p className="text-2xl font-bold">
                      Successful Defensive Response
                    </p>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
