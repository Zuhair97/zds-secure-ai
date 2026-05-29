"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DeveloperEcosystemPage() {

  const apis = [

    {
      api:
        "Threat Intelligence API",
      status:
        "ACTIVE",
      details:
        "Real-time AI threat detection and cyber intelligence integration infrastructure.",
    },

    {
      api:
        "Recovery Intelligence API",
      status:
        "READY",
      details:
        "AI-powered device and digital asset recovery intelligence workflows.",
    },

    {
      api:
        "Trust Score API",
      status:
        "CONNECTED",
      details:
        "Behavioral trust scoring and fraud reputation intelligence systems enabled.",
    },

    {
      api:
        "Blockchain Intelligence API",
      status:
        "MONITORING",
      details:
        "Blockchain security intelligence and suspicious wallet analysis infrastructure.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Developer Ecosystem
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered API infrastructure and global developer integration systems.
          </p>

        </div>

        <div className="grid gap-6">

          {apis.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-emerald-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-emerald-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.api}
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
