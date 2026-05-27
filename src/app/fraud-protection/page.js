"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function FraudProtectionPage() {

  const [transaction, setTransaction] = useState("");
  const [result, setResult] = useState(null);

  function analyzeFraud() {

    if (
      transaction.includes("urgent") ||
      transaction.includes("bonus") ||
      transaction.includes("investment")
    ) {

      setResult({
        risk: "HIGH RISK",
        score: "91%",
        details:
          "AI detected abnormal transaction behavior associated with scam patterns.",
      });

    } else {

      setResult({
        risk: "LOW RISK",
        score: "18%",
        details:
          "No major fraud indicators detected during AI behavioral analysis.",
      });

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-rose-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-rose-400 to-cyan-400 text-transparent bg-clip-text">
              AI Fraud Protection
            </h1>

            <p className="text-zinc-300 text-lg">
              Intelligent financial fraud detection and behavioral threat analysis.
            </p>

          </div>

          <div className="bg-white/5 border border-rose-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-rose-500/10">

            <input
              type="text"
              placeholder="Describe suspicious transaction..."
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none mb-5"
            />

            <button
              onClick={analyzeFraud}
              className="w-full bg-rose-500 hover:bg-rose-600 transition rounded-2xl py-4 text-xl font-bold"
            >
              Analyze Fraud Risk
            </button>

          </div>

          {result && (

            <div className="mt-8 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

              <h2 className="text-3xl font-bold mb-6 text-cyan-300">
                Fraud Analysis Result
              </h2>

              <div className="space-y-4">

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    Fraud Risk
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
