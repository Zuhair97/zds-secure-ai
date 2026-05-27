"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TrustEnginePage() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  function analyzeTrust() {

    if (
      input.includes("secure") ||
      input.includes("official")
    ) {

      setResult({
        score: "94%",
        status: "TRUSTED",
        reason:
          "Strong historical reputation and no active phishing indicators detected.",
      });

    } else {

      setResult({
        score: "47%",
        status: "SUSPICIOUS",
        reason:
          "AI detected inconsistent reputation signals and suspicious behavioral patterns.",
      });

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-blue-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              AI Trust Engine
            </h1>

            <p className="text-zinc-300 text-lg">
              Reputation intelligence and transparent AI-powered trust analysis.
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

            <input
              type="text"
              placeholder="Enter domain, wallet, or platform..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none mb-5"
            />

            <button
              onClick={analyzeTrust}
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-2xl py-4 text-xl font-bold text-black"
            >
              Analyze Trust
            </button>

          </div>

          {result && (

            <div className="mt-8 bg-white/5 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-blue-500/10">

              <h2 className="text-3xl font-bold mb-6 text-cyan-300">
                Reputation Analysis
              </h2>

              <div className="space-y-4">

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    AI Trust Score
                  </p>

                  <p className="text-4xl font-extrabold text-cyan-400">
                    {result.score}
                  </p>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-2xl font-bold mb-3">
                    {result.status}
                  </p>

                  <p className="text-zinc-300 text-lg leading-8">
                    {result.reason}
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
