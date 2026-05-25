"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function MultilingualSystemPage() {

  const languages = [

    {
      language:
        "English",
      status:
        "Active",
      details:
        "Default global interface language operational.",
    },

    {
      language:
        "Hausa",
      status:
        "Supported",
      details:
        "Localized Hausa cybersecurity experience enabled.",
    },

    {
      language:
        "Arabic",
      status:
        "Integrated",
      details:
        "Right-to-left multilingual infrastructure active.",
    },

    {
      language:
        "French",
      status:
        "Ready",
      details:
        "Localized AI communication systems prepared.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Supported":
        return "bg-cyan-500 text-black";

      case "Integrated":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-cyan-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Global Multilingual AI
            </h1>

            <p className="text-zinc-300 text-lg">
              AI-powered multilingual cybersecurity ecosystem with global language accessibility.
            </p>

          </div>

          <div className="bg-cyan-400 text-black px-5 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/40">

            GLOBAL LANGUAGES ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {languages.map(
            (item, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.language}
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
