"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function PhishingScannerPage() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  function scanURL() {

    if (
      url.includes("free") ||
      url.includes("bonus") ||
      url.includes("claim") ||
      url.includes("airdrop")
    ) {

      setResult({
        status: "HIGH RISK",
        message:
          "AI detected phishing indicators and suspicious patterns.",
        recommendation:
          "Avoid opening this link.",
      });

    } else {

      setResult({
        status: "SAFE",
        message:
          "No strong phishing indicators detected.",
        recommendation:
          "Proceed carefully and verify source authenticity.",
      });

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-cyan-400 text-transparent bg-clip-text">
              AI Phishing Scanner
            </h1>

            <p className="text-zinc-300 text-lg">
              Intelligent phishing detection and scam protection powered by AI.
            </p>

          </div>

          <div className="bg-white/5 border border-red-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-red-500/10">

            <input
              type="text"
              placeholder="Paste suspicious URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none mb-5"
            />

            <button
              onClick={scanURL}
              className="w-full bg-red-500 hover:bg-red-600 transition rounded-2xl py-4 text-xl font-bold"
            >
              Scan URL
            </button>

          </div>

          {result && (

            <div className="mt-8 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

              <h2 className="text-3xl font-bold mb-4 text-cyan-300">
                Scan Result
              </h2>

              <div className="space-y-4">

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    Threat Level
                  </p>

                  <p className="text-3xl font-extrabold text-red-400">
                    {result.status}
                  </p>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {result.message}
                  </p>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {result.recommendation}
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
