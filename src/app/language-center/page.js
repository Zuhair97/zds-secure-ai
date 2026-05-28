"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function LanguageCenterPage() {

  const languages = [

    {
      language:
        "English",
      status:
        "ACTIVE",
      details:
        "Primary AI communication infrastructure enabled.",
    },

    {
      language:
        "Hausa",
      status:
        "SUPPORTED",
      details:
        "Localized Hausa AI interaction and security alerts available.",
    },

    {
      language:
        "Arabic",
      status:
        "READY",
      details:
        "Arabic accessibility and multilingual communication systems prepared.",
    },

    {
      language:
        "French",
      status:
        "READY",
      details:
        "French localization and AI translation infrastructure enabled.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "ACTIVE":
        return "bg-green-500 text-black";

      case "SUPPORTED":
        return "bg-cyan-500 text-black";

      default:
        return "bg-yellow-500 text-black";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-orange-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
            Language Center
          </h1>

          <p className="text-zinc-300 text-lg">
            AI multilingual communication and global accessibility infrastructure.
          </p>

        </div>

        <div className="grid gap-6">

          {languages.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-orange-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-orange-500/10"
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

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
