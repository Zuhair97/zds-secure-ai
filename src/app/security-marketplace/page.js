"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityMarketplacePage() {

  const ecosystem = [

    {
      module:
        "Developer API Gateway",
      status:
        "Online",
      details:
        "Secure API infrastructure available for integrations.",
    },

    {
      module:
        "Security Plugin Marketplace",
      status:
        "Protected",
      details:
        "AI validating third-party security extensions.",
    },

    {
      module:
        "SDK Infrastructure",
      status:
        "Active",
      details:
        "Cross-platform cybersecurity SDK systems operational.",
    },

    {
      module:
        "AI Integration Engine",
      status:
        "Monitoring",
      details:
        "Analyzing external security module interactions.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Online":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Protected":
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
              Security Marketplace
            </h1>

            <p className="text-zinc-400">
              AI-powered cybersecurity developer ecosystem and marketplace infrastructure.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            ECOSYSTEM ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {ecosystem.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.module}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

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
