"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CloudShieldPage() {

  const cloudSystems = [

    {
      feature:
        "Infrastructure Monitoring",
      status:
        "Operational",
      details:
        "AI continuously monitoring cloud infrastructure and server integrity.",
    },

    {
      feature:
        "Container Protection",
      status:
        "Protected",
      details:
        "Autonomous AI container and Kubernetes security intelligence active.",
    },

    {
      feature:
        "Cloud Threat Detection",
      status:
        "Analyzing",
      details:
        "AI analyzing distributed telemetry for suspicious cloud activities.",
    },

    {
      feature:
        "Autonomous Infrastructure Defense",
      status:
        "Live",
      details:
        "Machine-speed AI cloud defense and attack mitigation operational.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-blue-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Cloud Shield
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered cloud infrastructure protection and autonomous cybersecurity defense.
            </p>

          </div>

          <div className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-blue-500/40">

            CLOUD SHIELD ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {cloudSystems.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-3xl p-6 shadow-2xl shadow-blue-500/10"
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
