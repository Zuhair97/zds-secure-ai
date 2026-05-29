"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AISOCPage() {

  const operations = [

    {
      operation:
        "Threat Correlation Engine",
      status:
        "ACTIVE",
      details:
        "AI correlating cyber threats and suspicious activity across systems.",
    },

    {
      operation:
        "Autonomous Incident Response",
      status:
        "READY",
      details:
        "Automated AI-driven security response and recovery coordination workflows.",
    },

    {
      operation:
        "Continuous Monitoring",
      status:
        "MONITORING",
      details:
        "24/7 intelligent monitoring and real-time cybersecurity analysis infrastructure.",
    },

    {
      operation:
        "Risk Escalation Intelligence",
      status:
        "VERIFIED",
      details:
        "AI prioritizing elevated incidents and coordinating emergency response actions.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-rose-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-rose-400 to-cyan-400 text-transparent bg-clip-text">
            AI Security Operations Center
          </h1>

          <p className="text-zinc-300 text-lg">
            Autonomous AI cybersecurity monitoring and intelligent incident response infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {operations.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-rose-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-rose-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.operation}
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
