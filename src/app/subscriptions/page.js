"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SubscriptionsPage() {

  const plans = [

    {
      plan:
        "Free",
      price:
        "$0",
      details:
        "Basic cybersecurity protection and alerts.",
    },

    {
      plan:
        "Premium",
      price:
        "$19/mo",
      details:
        "Advanced AI threat intelligence and real-time defense.",
    },

    {
      plan:
        "Enterprise",
      price:
        "Custom",
      details:
        "Organization-grade AI cybersecurity infrastructure.",
    },

    {
      plan:
        "Web3 Security",
      price:
        "$29/mo",
      details:
        "Advanced wallet defense and decentralized security tools.",
    },

  ];

  function getColor(plan) {

    switch (plan) {

      case "Premium":
        return "bg-cyan-500 text-black";

      case "Enterprise":
        return "bg-purple-500 text-white";

      case "Web3 Security":
        return "bg-yellow-500 text-black";

      default:
        return "bg-green-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Subscription Ecosystem
            </h1>

            <p className="text-zinc-300 text-lg">
              Premium AI cybersecurity monetization and subscription infrastructure.
            </p>

          </div>

          <div className="bg-emerald-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-emerald-500/40">

            MONETIZATION ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {plans.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-emerald-500/20 rounded-3xl p-6 shadow-2xl shadow-emerald-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h2 className="text-3xl font-bold">
                      {item.plan}
                    </h2>

                    <p className="text-2xl mt-2 font-bold text-cyan-300">
                      {item.price}
                    </p>

                  </div>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.plan)}`}>

                    ACTIVE

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
