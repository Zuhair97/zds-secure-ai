"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityMarketplacePage() {

  const marketplace = [

    {
      module:
        "Browser Security Extensions",
      status:
        "ACTIVE",
      details:
        "AI-powered browser protection and anti-phishing security extensions.",
    },

    {
      module:
        "Web3 Wallet Protection",
      status:
        "READY",
      details:
        "Advanced wallet protection and blockchain security integration tools.",
    },

    {
      module:
        "Enterprise Integrations",
      status:
        "CONNECTED",
      details:
        "Enterprise cybersecurity modules and organizational defense integrations.",
    },

    {
      module:
        "AI Automation Plugins",
      status:
        "MONITORING",
      details:
        "Automated cybersecurity workflows and intelligent AI protection plugins.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      case "CONNECTED":
        return "bg-purple-500 text-white";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-orange-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
            Security Marketplace
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered cybersecurity marketplace and ecosystem extension infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {marketplace.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-orange-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-orange-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.module}
                  </h2>

                  <p className="text-zinc-400 mt-2 text-lg">
                    {item.details}
                  </p>

                </div>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                  {item.status}

                </span>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
