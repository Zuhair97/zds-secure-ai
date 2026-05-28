"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ForensicsCenterPage() {

  const reports = [

    {
      incident:
        "Unauthorized Wallet Access",
      status:
        "INVESTIGATED",
      details:
        "AI reconstructed suspicious login behavior and correlated threat indicators.",
    },

    {
      incident:
        "Device Theft Activity",
      status:
        "ANALYZING",
      details:
        "Recovery intelligence and forensic tracking systems monitoring activity.",
    },

    {
      incident:
        "Phishing Infrastructure",
      status:
        "CONFIRMED",
      details:
        "AI identified coordinated phishing indicators and generated evidence logs.",
    },

    {
      incident:
        "Fraud Investigation",
      status:
        "ACTIVE",
      details:
        "Behavioral analysis and suspicious transaction correlation in progress.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "CONFIRMED":
        return "bg-red-500 text-white";

      case "INVESTIGATED":
        return "bg-cyan-500 text-black";

      case "ANALYZING":
        return "bg-yellow-500 text-black";

      default:
        return "bg-green-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-indigo-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            AI Forensics Center
          </h1>

          <p className="text-zinc-300 text-lg">
            Intelligent cybersecurity investigation and incident reconstruction infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {reports.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-indigo-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
            >

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-3xl font-bold">
                  {item.incident}
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
