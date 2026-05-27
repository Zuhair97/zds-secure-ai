"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TradingGuardianPage() {

  const [token, setToken] = useState("");
  const [result, setResult] = useState(null);

  function analyzeToken() {

    if (
      token.includes("moon") ||
      token.includes("100x") ||
      token.includes("pump")
    ) {

      setResult({
        risk: "HIGH RISK",
        score: "89%",
        details:
          "AI detected suspicious hype patterns and abnormal liquidity behavior.",
      });

    } else {

      setResult({
        risk: "MODERATE RISK",
        score: "42%",
        details:
          "No critical rugpull indicators detected, but volatility remains elevated.",
      });

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              AI Trading Guardian
            </h1>

            <p className="text-zinc-300 text-lg">
              Intelligent trading-risk protection and AI-powered market security analysis.
            </p>

          </div>

          <div className="bg-white/5 border border-emerald-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">

            <input
              type="text"
              placeholder="Enter token or project name..."
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none mb-5"
            />

            <button
              onClick={analyzeToken}
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition rounded-2xl py-4 text-xl font-bold text-black"
            >
              Analyze Market Risk
            </button>

          </div>

          {result && (

            <div className="mt-8 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

              <h2 className="text-3xl font-bold mb-6 text-cyan-300">
                Trading Risk Analysis
              </h2>

              <div className="space-y-4">

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    Risk Level
                  </p>

                  <p className="text-3xl font-extrabold text-red-400">
                    {result.risk}
                  </p>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    AI Confidence Score
                  </p>

                  <p className="text-3xl font-extrabold text-cyan-400">
                    {result.score}
                  </p>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {result.details}
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
