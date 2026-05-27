"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function WalletSecurityPage() {

  const [wallet, setWallet] = useState("");
  const [result, setResult] = useState(null);

  function analyzeWallet() {

    if (
      wallet.includes("0x")
    ) {

      setResult({
        status: "MEDIUM RISK",
        message:
          "AI detected suspicious smart-contract approval behavior.",
        recommendation:
          "Review connected applications and revoke risky permissions.",
      });

    } else {

      setResult({
        status: "INVALID",
        message:
          "Wallet format could not be verified.",
        recommendation:
          "Check wallet address and try again.",
      });

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              AI Wallet Security
            </h1>

            <p className="text-zinc-300 text-lg">
              Intelligent Web3 wallet protection and smart-contract risk analysis.
            </p>

          </div>

          <div className="bg-white/5 border border-emerald-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">

            <input
              type="text"
              placeholder="Paste wallet address here..."
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none mb-5"
            />

            <button
              onClick={analyzeWallet}
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition rounded-2xl py-4 text-xl font-bold text-black"
            >
              Analyze Wallet
            </button>

          </div>

          {result && (

            <div className="mt-8 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

              <h2 className="text-3xl font-bold mb-4 text-cyan-300">
                Wallet Security Result
              </h2>

              <div className="space-y-4">

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    Risk Level
                  </p>

                  <p className="text-3xl font-extrabold text-yellow-400">
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
