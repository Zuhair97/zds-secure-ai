"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AIAgentsPage() {

  const agents = [

    {
      agent:
        "Threat Hunter Agent",
      status:
        "Live",
      details:
        "AI autonomously hunting suspicious cybersecurity activity.",
    },

    {
      agent:
        "Wallet Defense Agent",
      status:
        "Protected",
      details:
        "Web3 wallet protection and smart contract monitoring active.",
    },

    {
      agent:
        "Incident Response Agent",
      status:
        "Operational",
      details:
        "Machine-speed AI incident mitigation systems enabled.",
    },

    {
      agent:
        "Phishing Detection Agent",
      status:
        "Analyzing",
      details:
        "AI detecting credential harvesting infrastructure in real time.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Live":
        return "bg-red-500 text-white";

      case "Protected":
        return "bg-green-500 text-black";

      case "Operational":
        return "bg-cyan-500 text-black";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-indigo-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              AI Security Agents
            </h1>

            <p className="text-zinc-300 text-lg">
              Autonomous AI cybersecurity defense agents and machine-speed protection ecosystem.
            </p>

          </div>

          <div className="bg-indigo-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/40">

            AI AGENTS ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {agents.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-indigo-500/20 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.agent}
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
