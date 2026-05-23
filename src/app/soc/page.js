"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SOCPage() {

  const stats = [

    {
      title:
        "Threat Level",
      value: "Medium",
      color:
        "bg-yellow-950 border-yellow-700",
    },

    {
      title:
        "Protected Devices",
      value: "12",
      color:
        "bg-green-950 border-green-700",
    },

    {
      title:
        "Active Sessions",
      value: "5",
      color:
        "bg-blue-950 border-blue-700",
    },

    {
      title:
        "AI Incidents",
      value: "3",
      color:
        "bg-red-950 border-red-700",
    },

  ];

  const incidents = [

    {
      title:
        "Impossible Travel",
      severity: "High",
      status:
        "Contained",
    },

    {
      title:
        "Unknown Device Login",
      severity:
        "Medium",
      status:
        "Monitoring",
    },

    {
      title:
        "Geo-Risk Alert",
      severity: "High",
      status:
        "Analyzing",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              AI Security Operations Center
            </h1>

            <p className="text-zinc-400">
              Real-time AI cyber defense command center.
            </p>

          </div>

          <div className="bg-green-500 text-black px-5 py-2 rounded-full font-bold">

            SYSTEM ACTIVE

          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-12">

          {stats.map(
            (item, index) => (

              <div
                key={index}
                className={`rounded-2xl border p-6 ${item.color}`}
              >

                <p className="text-zinc-300 mb-3">
                  {item.title}
                </p>

                <h2 className="text-5xl font-bold">
                  {item.value}
                </h2>

              </div>

            )
          )}

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Active AI Incidents
          </h2>

          <div className="grid gap-5">

            {incidents.map(
              (item, index) => (

                <div
                  key={index}
                  className="bg-black border border-zinc-800 rounded-xl p-5"
                >

                  <div className="flex items-center justify-between mb-4">

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                      item.severity ===
                      "High"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}>

                      {item.severity}

                    </span>

                  </div>

                  <p className="text-zinc-400">
                    Status:
                    {" "}
                    <span className="font-bold text-white">
                      {item.status}
                    </span>
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </main>

    </ProtectedRoute>
  );
}
