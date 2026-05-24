"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CommunicationShieldPage() {

  const communications = [

    {
      channel:
        "Telegram Monitoring",
      status:
        "Protected",
      activity:
        "AI blocked suspicious phishing URL.",
    },

    {
      channel:
        "Discord Security",
      status:
        "Monitoring",
      activity:
        "Impersonation analysis running.",
    },

    {
      channel:
        "Encrypted Messaging",
      status:
        "Secured",
      activity:
        "Secure communication integrity verified.",
    },

    {
      channel:
        "Email Intelligence",
      status:
        "Scanning",
      activity:
        "AI analyzing malicious attachment behavior.",
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
              Communication Shield
            </h1>

            <p className="text-zinc-400">
              AI-powered encrypted communication security and phishing intelligence engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            COMMUNICATION SHIELD ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {communications.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.channel}
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
