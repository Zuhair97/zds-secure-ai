"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CyberAcademyPage() {

  const lessons = [

    {
      lesson:
        "Phishing Awareness",
      status:
        "ACTIVE",
      details:
        "AI-powered phishing detection and scam awareness training infrastructure.",
    },

    {
      lesson:
        "Wallet Security",
      status:
        "READY",
      details:
        "Web3 wallet protection and blockchain safety learning systems enabled.",
    },

    {
      lesson:
        "Device Protection",
      status:
        "CONNECTED",
      details:
        "Cybersecurity education for anti-theft and intelligent device protection.",
    },

    {
      lesson:
        "Enterprise Security Training",
      status:
        "MONITORING",
      details:
        "Organizational cybersecurity awareness and enterprise defense education.",
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

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-sky-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text">
            ZDS Cyber Academy
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered cybersecurity education and digital safety learning infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {lessons.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-sky-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-sky-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.lesson}
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
