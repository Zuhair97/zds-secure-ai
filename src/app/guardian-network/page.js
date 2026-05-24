"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function GuardianNetworkPage() {

  const nodes = [

    {
      node:
        "Africa Guardian Node",
      status:
        "Online",
      threats:
        "42 blocked threats",
    },

    {
      node:
        "Europe Guardian Node",
      status:
        "Online",
      threats:
        "31 blocked threats",
    },

    {
      node:
        "Asia Guardian Node",
      status:
        "Monitoring",
      threats:
        "19 suspicious activities detected",
    },

    {
      node:
        "North America Node",
      status:
        "Protected",
      threats:
        "Zero active incidents",
    },

  ];

  function getStatusColor(status) {

    switch (status) {

      case "Online":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Guardian Network
            </h1>

            <p className="text-zinc-400">
              Distributed AI cybersecurity guardian mesh and autonomous defense network.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            GLOBAL GUARDIAN NETWORK ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {nodes.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.node}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {item.threats}
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
