"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function IoTDefensePage() {

  const devices = [

    {
      device:
        "Smart Router",
      status:
        "Protected",
      activity:
        "AI monitoring unusual network behavior.",
    },

    {
      device:
        "Smart Camera",
      status:
        "Monitoring",
      activity:
        "Device communication integrity verified.",
    },

    {
      device:
        "Smart TV",
      status:
        "Scanning",
      activity:
        "Analyzing suspicious background requests.",
    },

    {
      device:
        "Connected IoT Sensor",
      status:
        "Secured",
      activity:
        "No unauthorized activity detected.",
    },

  ];

  function getColor(status) {

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
              IoT Defense
            </h1>

            <p className="text-zinc-400">
              AI-powered smart device and connected ecosystem cybersecurity engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            IOT DEFENSE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {devices.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.device}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {item.activity}
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
