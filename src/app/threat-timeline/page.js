"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatTimelinePage() {

  const events = [

    {
      time: "10:01 AM",
      title:
        "New Device Login",
      level: "Medium",
      description:
        "AI detected login from an unknown Android device.",
    },

    {
      time: "10:03 AM",
      title:
        "Geo-Risk Anomaly",
      level: "High",
      description:
        "Impossible travel pattern identified between Nigeria and China.",
    },

    {
      time: "10:05 AM",
      title:
        "Session Escalation",
      level: "Critical",
      description:
        "AI increased threat severity after behavioral anomaly detection.",
    },

    {
      time: "10:06 AM",
      title:
        "Threat Containment",
      level: "Protected",
      description:
        "Suspicious session isolated successfully.",
    },

  ];

  function getStyles(level) {

    switch (level) {

      case "Critical":
        return "bg-red-950 border-red-700";

      case "High":
        return "bg-orange-950 border-orange-700";

      case "Medium":
        return "bg-yellow-950 border-yellow-700";

      default:
        return "bg-green-950 border-green-700";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          AI Threat Timeline
        </h1>

        <p className="text-zinc-400 mb-12">
          AI-powered attack correlation and security timeline visualization.
        </p>

        <div className="relative border-l-4 border-zinc-700 pl-8 space-y-10">

          {events.map(
            (event, index) => (

              <div
                key={index}
                className={`relative rounded-2xl border p-6 ${getStyles(event.level)}`}
              >

                <div className="absolute -left-11 top-8 w-6 h-6 rounded-full bg-blue-500 border-4 border-black"></div>

                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-3xl font-bold">
                    {event.title}
                  </h2>

                  <span className="text-lg font-bold">
                    {event.time}
                  </span>

                </div>

                <div className="mb-4">

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    event.level === "Critical"
                      ? "bg-red-500 text-white"
                      : event.level === "High"
                      ? "bg-orange-500 text-black"
                      : event.level === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-500 text-black"
                  }`}>

                    {event.level}

                  </span>

                </div>

                <p className="text-zinc-200 text-lg leading-8">
                  {event.description}
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
