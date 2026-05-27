"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProductCorePage() {

  const priorities = [

    {
      category:
        "User Experience",
      focus:
        "Clean UI, mobile responsiveness, onboarding, multilingual support.",
    },

    {
      category:
        "Security Tools",
      focus:
        "Phishing scanner, wallet analyzer, AI alerts, threat monitoring.",
    },

    {
      category:
        "Trust Systems",
      focus:
        "AI trust scoring, reputation systems, transparent protection indicators.",
    },

    {
      category:
        "Monetization",
      focus:
        "Premium subscriptions, API access, enterprise security plans.",
    },

    {
      category:
        "Scalability",
      focus:
        "Cloud optimization, modular systems, global infrastructure readiness.",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-cyan-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            Strategic Product Core
          </h1>

          <p className="text-zinc-300 text-lg">
            Product-first restructuring and global readiness infrastructure for ZDS Secure AI.
          </p>

        </div>

        <div className="grid gap-6">

          {priorities.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
            >

              <h2 className="text-3xl font-bold mb-4 text-cyan-300">
                {item.category}
              </h2>

              <div className="bg-black/40 rounded-2xl p-5 border border-zinc-800">

                <p className="text-zinc-300 text-lg leading-8">
                  {item.focus}
                </p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
