"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AuthSystemPage() {

  const methods = [

    {
      method:
        "Email Authentication",
      status:
        "Active",
      details:
        "Secure email and password authentication enabled.",
    },

    {
      method:
        "Multi-Factor Authentication",
      status:
        "Protected",
      details:
        "Advanced identity verification systems operational.",
    },

    {
      method:
        "OAuth Integration",
      status:
        "Live",
      details:
        "Google and GitHub authentication infrastructure active.",
    },

    {
      method:
        "Biometric Authentication",
      status:
        "Integrated",
      details:
        "Fingerprint and facial verification systems prepared.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-yellow-500 text-black";

      case "Live":
        return "bg-red-500 text-white";

      default:
        return "bg-cyan-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-cyan-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Authentication System
            </h1>

            <p className="text-zinc-300 text-lg">
              Secure AI identity verification and authentication infrastructure.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/40">

            AUTH ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {methods.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.method}
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
