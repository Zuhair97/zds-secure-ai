"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function EnterpriseDefensePage() {

  const systems = [

    {
      feature:
        "Organization Threat Monitoring",
      status:
        "ACTIVE",
      details:
        "AI enterprise-wide threat monitoring systems operational.",
    },

    {
      feature:
        "Employee Security Intelligence",
      status:
        "MONITORING",
      details:
        "Protected device and employee cybersecurity workflows enabled.",
    },

    {
      feature:
        "Centralized Admin Controls",
      status:
        "SECURED",
      details:
        "Administrative protection and security coordination systems active.",
    },

    {
      feature:
        "Incident Escalation Workflows",
      status:
        "READY",
      details:
        "AI-driven organizational incident escalation and recovery systems prepared.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      case "SECURED":
        return "bg-cyan-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-blue-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Enterprise Defense Platform
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered organizational cybersecurity and enterprise protection infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {systems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
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

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
