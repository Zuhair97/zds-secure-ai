"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function BillingSystemPage() {

  const plans = [

    {
      plan:
        "Free Plan",
      price:
        "$0",
      features:
        "Basic AI protection and limited monitoring.",
    },

    {
      plan:
        "Pro Plan",
      price:
        "$19/month",
      features:
        "Advanced AI protection, fraud defense, and recovery systems.",
    },

    {
      plan:
        "Enterprise Plan",
      price:
        "Custom",
      features:
        "Organization-wide AI cybersecurity and enterprise defense infrastructure.",
    },

    {
      plan:
        "Government Plan",
      price:
        "Custom",
      features:
        "Critical infrastructure protection and national-scale security workflows.",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-green-950 text-white p-6">

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
            Billing & Subscription Infrastructure
          </h1>

          <p className="text-zinc-300 text-lg">
            Secure global payment, subscription, and monetization systems.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {plans.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-green-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-green-500/10"
            >

              <h2 className="text-3xl font-bold mb-4">
                {item.plan}
              </h2>

              <p className="text-5xl font-extrabold text-cyan-400 mb-5">
                {item.price}
              </p>

              <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                <p className="text-zinc-300 text-lg leading-8">
                  {item.features}
                </p>

              </div>

              <button
                className="mt-6 w-full bg-green-500 hover:bg-green-600 transition rounded-2xl py-4 text-xl font-bold text-black"
              >
                Select Plan
              </button>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
