"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function NationalDefensePage() {

  const sectors = [

    {
      sector:
        "Telecommunications Security",
      status:
        "ACTIVE",
      details:
        "AI monitoring telecom infrastructure and suspicious cyber activity.",
    },

    {
      sector:
        "Financial Infrastructure Defense",
      status:
        "MONITORING",
      details:
        "AI-powered banking and financial-system protection workflows operational.",
    },

    {
      sector:
        "Government Cyber Coordination",
      status:
        "READY",
      details:
        "Large-scale incident coordination and national cyber intelligence systems enabled.",
    },

    {
      sector:
        "Critical Infrastructure Analysis",
      status:
        "VERIFIED",
      details:
        "AI analyzing infrastructure resilience and elevated threat indicators.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-indigo-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            National Defense Infrastructure
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered national cybersecurity and critical infrastructure defense systems.
          </p>

        </div>

        <div className="grid gap-6">

          {sectors.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-indigo-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.sector}
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
