"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function MultilingualAIPage() {

  const [language, setLanguage] = useState("English");

  const messages = {

    English: {
      title: "AI Multilingual Assistant",
      warning:
        "Threat detected. Avoid interacting with suspicious infrastructure.",
    },

    Hausa: {
      title: "AI Mai Tallafin Harsuna",
      warning:
        "An gano threat. A guji hulda da suspicious infrastructure.",
    },

    Arabic: {
      title: "مساعد الذكاء الاصطناعي متعدد اللغات",
      warning:
        "تم اكتشاف تهديد. تجنب التفاعل مع البنية التحتية المشبوهة.",
    },

  };

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-fuchsia-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              {messages[language].title}
            </h1>

            <p className="text-zinc-300 text-lg">
              Global multilingual AI communication and cybersecurity interaction system.
            </p>

          </div>

          <div className="bg-white/5 border border-fuchsia-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-fuchsia-500/10 mb-8">

            <label className="block text-lg mb-3 text-zinc-300">
              Select Language
            </label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none"
            >

              <option>English</option>
              <option>Hausa</option>
              <option>Arabic</option>

            </select>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

            <h2 className="text-3xl font-bold mb-5 text-cyan-300">
              AI Security Warning
            </h2>

            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

              <p className="text-zinc-300 text-xl leading-9">
                {messages[language].warning}
              </p>

            </div>

          </div>

        </div>

      </main>

    </ProtectedRoute>
  );
}
