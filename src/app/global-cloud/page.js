"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function GlobalCloudPage() {

  const regions = [

    {
      region:
        "North America",
      status:
        "Operational",
      details:
        "Distributed cybersecurity processing infrastructure active.",
    },

    {
      region:
        "Europe",
      status:
        "Synchronized",
      details:
        "AI threat intelligence replicated across European nodes.",
    },

    {
      region:
        "Africa",
      status:
        "Protected",
      details:
        "Localized African cybersecurity infrastructure operational.",
    },

    {
      region:
        "Asia",
      status:
        "Live",
      details:
        "High-availability AI cloud defense systems active.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Operational":
        return "bg-green-500 text-black";

      case "Synchronized":
        return "bg-cyan-500 text-black";

      case "Protected":
        return "bg-yellow-500 text-black";

      default:
        return "bg-red-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-sky-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text">
              Global Cloud Infrastructure
            </h1>

            <p className="text-zinc-300 text-lg">
              Distributed AI cybersecurity and planet-scale cloud defense architecture.
            </p>

          </div>

          <div className="bg-sky-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-sky-500/40">

            GLOBAL CLOUD ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {regions.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-sky-500/20 rounded-3xl p-6 shadow-2xl shadow-sky-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.region}
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
