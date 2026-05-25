"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function VoiceAssistantPage() {

  const features = [

    {
      feature:
        "AI Voice Assistant",
      status:
        "Active",
      details:
        "Conversational AI cybersecurity interaction enabled.",
    },

    {
      feature:
        "Hausa Voice Support",
      status:
        "Integrated",
      details:
        "Localized Hausa voice communication operational.",
    },

    {
      feature:
        "Voice Threat Alerts",
      status:
        "Protected",
      details:
        "Spoken cybersecurity notifications active.",
    },

    {
      feature:
        "Voice Command Engine",
      status:
        "Live",
      details:
        "AI voice-driven security control systems operational.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Integrated":
        return "bg-cyan-500 text-black";

      case "Protected":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-violet-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
              AI Voice Assistant
            </h1>

            <p className="text-zinc-300 text-lg">
              Conversational multilingual AI cybersecurity and voice protection ecosystem.
            </p>

          </div>

          <div className="bg-violet-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-violet-500/40">

            VOICE AI ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {features.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-violet-500/20 rounded-3xl p-6 shadow-2xl shadow-violet-500/10"
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

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
