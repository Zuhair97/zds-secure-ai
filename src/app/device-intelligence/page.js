"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DeviceIntelligencePage() {

  const telemetry = [

    {
      event:
        "Clipboard Integrity Check",
      status: "Protected",
      details:
        "No suspicious clipboard replacement activity detected.",
    },

    {
      event:
        "Device Fingerprint Stability",
      status: "Monitoring",
      details:
        "Minor browser fingerprint deviation identified.",
    },

    {
      event:
        "Session Behavior Analytics",
      status: "Secure",
      details:
        "Behavioral patterns match trusted user profile.",
    },

    {
      event:
        "Background Activity Analysis",
      status: "Scanning",
      details:
        "AI analyzing suspicious background network requests.",
    },

    {
      event:
        "Credential Access Monitoring",
      status: "Protected",
      details:
        "No unauthorized credential extraction attempts detected.",
    },

  ];

  function getStatusColor(status) {

    switch (status) {

      case "Protected":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Scanning":
        return "bg-blue-500 text-black";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Device Intelligence
            </h1>

            <p className="text-zinc-400">
              AI-powered behavioral telemetry and endpoint intelligence engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            TELEMETRY ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {telemetry.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.event}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

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
