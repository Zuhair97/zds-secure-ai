"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AutonomousResponsePage() {

  const incidents = [

    {
      incident:
        "Suspicious Wallet Session",
      severity: "Critical",
      action:
        "Wallet session isolated automatically.",
      status:
        "Contained",
    },

    {
      incident:
        "Credential Theft Attempt",
      severity: "High",
      action:
        "AI revoked suspicious session tokens.",
      status:
        "Blocked",
    },

    {
      incident:
        "Geo-Risk Authentication",
      severity: "Medium",
      action:
        "Additional verification enforced.",
      status:
        "Monitoring",
    },

    {
      incident:
        "Malicious Browser Activity",
      severity: "Critical",
      action:
        "Browser session quarantined.",
      status:
        "Contained",
    },

  ];

  function getSeverity(level) {

    switch (level) {

      case "Critical":
        return "bg-red-500 text-white";

      case "High":
        return "bg-orange-500 text-black";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  function getStatus(status) {

    switch (status) {

      case "Contained":
        return "bg-green-500 text-black";

      case "Blocked":
        return "bg-blue-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Autonomous Response Engine
            </h1>

            <p className="text-zinc-400">
              AI-driven autonomous cybersecurity containment and incident response.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            AUTONOMOUS DEFENSE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {incidents.map(
            (incident, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {incident.incident}
                  </h2>

                  <div className="flex gap-3">

                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${getSeverity(incident.severity)}`}>

                      {incident.severity}

                    </span>

                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatus(incident.status)}`}>

                      {incident.status}

                    </span>

                  </div>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-400 mb-2">
                    AI Autonomous Action
                  </p>

                  <p className="text-2xl font-bold">
                    {incident.action}
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
