"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecureBackupPage() {

  const backups = [

    {
      feature:
        "Encrypted Cloud Backup",
      status:
        "ACTIVE",
      details:
        "AI-secured encrypted backup synchronization operational.",
    },

    {
      feature:
        "Emergency Recovery Restore",
      status:
        "READY",
      details:
        "Protected recovery workflows and continuity restoration systems enabled.",
    },

    {
      feature:
        "Identity Recovery",
      status:
        "MONITORING",
      details:
        "AI identity continuity and linked-security recovery monitoring active.",
    },

    {
      feature:
        "Backup Integrity Verification",
      status:
        "VERIFIED",
      details:
        "Encrypted backup integrity and security validation confirmed.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "READY":
        return "bg-cyan-500 text-black";

      case "MONITORING":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-sky-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text">
            Secure Backup & Recovery
          </h1>

          <p className="text-zinc-300 text-lg">
            AI-powered encrypted backup and intelligent continuity recovery infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {backups.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-sky-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-sky-500/10"
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

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
