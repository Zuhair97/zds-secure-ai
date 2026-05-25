"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function PremiumExperiencePage() {

  const features = [

    {
      feature:
        "Premium Dashboard UI",
      status:
        "Enhanced",
      details:
        "Advanced futuristic cybersecurity interface activated.",
    },

    {
      feature:
        "AI Visual Intelligence",
      status:
        "Active",
      details:
        "Dynamic cyber visualization systems operational.",
    },

    {
      feature:
        "Responsive Experience",
      status:
        "Optimized",
      details:
        "Cross-device premium responsiveness verified.",
    },

    {
      feature:
        "Animation Engine",
      status:
        "Smooth",
      details:
        "Modern UI transitions and interactions enabled.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Enhanced":
        return "bg-cyan-500 text-black";

      case "Optimized":
        return "bg-green-500 text-black";

      case "Smooth":
        return "bg-purple-500 text-white";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-cyan-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Premium Experience
            </h1>

            <p className="text-zinc-300 text-lg">
              World-class cybersecurity product experience and premium AI interface ecosystem.
            </p>

          </div>

          <div className="bg-cyan-400 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/40">

            PREMIUM MODE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {features.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:scale-[1.01] transition duration-300"
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
