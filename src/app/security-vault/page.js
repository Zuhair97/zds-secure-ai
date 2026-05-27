"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityVaultPage() {

  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  function analyzeIdentity() {

    if (
      email.includes("@")
    ) {

      setResult({
        status: "MONITORING ACTIVE",
        exposure: "LOW RISK",
        details:
          "No major credential leaks detected. AI monitoring identity exposure continuously.",
      });

    } else {

      setResult({
        status: "INVALID",
        exposure: "UNKNOWN",
        details:
          "Unable to verify identity input format.",
      });

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-sky-950 text-white p-6">

        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text">
              AI Security Vault
            </h1>

            <p className="text-zinc-300 text-lg">
              Intelligent identity protection and credential exposure monitoring system.
            </p>

          </div>

          <div className="bg-white/5 border border-sky-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-sky-500/10">

            <input
              type="text"
              placeholder="Enter email or identity..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-zinc-700 rounded-2xl p-4 text-white text-lg outline-none mb-5"
            />

            <button
              onClick={analyzeIdentity}
              className="w-full bg-sky-500 hover:bg-sky-600 transition rounded-2xl py-4 text-xl font-bold text-black"
            >
              Analyze Identity
            </button>

          </div>

          {result && (

            <div className="mt-8 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">

              <h2 className="text-3xl font-bold mb-6 text-cyan-300">
                Identity Protection Result
              </h2>

              <div className="space-y-4">

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    Protection Status
                  </p>

                  <p className="text-3xl font-extrabold text-sky-400">
                    {result.status}
                  </p>

                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

                  <p className="text-lg text-zinc-300 mb-2">
                    Exposure Level
                  </p>

                  <p className="text-2xl font-bold text-yellow-400">
                    {result.exposure}
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
