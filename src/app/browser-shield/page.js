"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function BrowserShieldPage() {

  const protections = [

    {
      title:
        "Phishing Protection",
      status: "Active",
      description:
        "AI scans suspicious domains and login pages in real-time.",
    },

    {
      title:
        "Wallet Popup Detection",
      status: "Monitoring",
      description:
        "AI monitors malicious wallet approval requests and fake popups.",
    },

    {
      title:
        "Clipboard Shield",
      status: "Protected",
      description:
        "Clipboard monitoring enabled against crypto address replacement attacks.",
    },

    {
      title:
        "Malicious Extension Detection",
      status: "Scanning",
      description:
        "AI analyzes risky browser extension behaviors and permissions.",
    },

    {
      title:
        "Session Hijack Prevention",
      status: "Active",
      description:
        "Real-time session anomaly detection and browser token monitoring.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      case "Scanning":
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
              AI Browser Shield
            </h1>

            <p className="text-zinc-400">
              Real-time AI-powered browser and Web3 protection engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            BROWSER SHIELD ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {protections.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <p className="text-zinc-300 text-lg leading-8">
                  {item.description}
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
