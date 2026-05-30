"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function LaunchReadinessPage() {

  const readiness = [

    {
      module:
        "Deployment Readiness",
      status:
        "ACTIVE",
      details:
        "AI verifying deployment workflows and infrastructure preparation.",
    },

    {
      module:
        "System Health Monitoring",
      status:
        "READY",
      details:
        "Continuous monitoring and operational health validation systems enabled.",
    },

    {
      module:
        "Billing Verification",
      status:
        "CONNECTED",
      details:
        "Subscription payments, Paystack integration and monetization validation.",
    },

    {
      module:
        "Security Validation",
      status:
        "MONITORING",
      details:
        "Infrastructure hardening and cybersecurity readiness verification.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-lime-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-lime-400 to-cyan-400 text-transparent bg-clip-text">
            Launch Readiness Center
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered deployment readiness and global launch preparation infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {readiness.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-lime-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-lime-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.module}
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
