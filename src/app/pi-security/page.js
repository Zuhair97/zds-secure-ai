"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function PiSecurityPage() {

  const [connected, setConnected] =
    useState(false);

  const [trustScore, setTrustScore] =
    useState(0);

  const [alerts, setAlerts] =
    useState([]);

  function connectPi() {

    setConnected(true);

    setTrustScore(
      Math.floor(
        Math.random() * 20
      ) + 80
    );

    setAlerts([

      {
        title:
          "Pi Browser Session Protected",
        level: "Protected",
      },

      {
        title:
          "AI Pi Phishing Shield Active",
        level: "Active",
      },

      {
        title:
          "Wallet Identity Verified",
        level: "Verified",
      },

    ]);

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Pi Ecosystem Security
            </h1>

            <p className="text-zinc-400">
              AI-powered Pi Browser and Pi Wallet protection layer.
            </p>

          </div>

          <div className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold">

            PI SECURITY ACTIVE

          </div>

        </div>

        {!connected ? (

          <button
            onClick={connectPi}
            className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-8 py-5 rounded-2xl text-2xl mb-12"
          >

            Connect Pi Wallet

          </button>

        ) : (

          <div className="grid gap-6 mb-12">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <h2 className="text-3xl font-bold mb-5">
                Pi Wallet Connected
              </h2>

              <p className="text-zinc-300 break-all">
                GCV81X...PIONEER...9K2L
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <p className="text-zinc-400 mb-3">
                AI Trust Score
              </p>

              <p className="text-6xl font-bold">
                {trustScore}%
              </p>

            </div>

          </div>

        )}

        <div className="grid gap-5">

          {alerts.map(
            (alert, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold">
                    {alert.title}
                  </h2>

                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                    {alert.level}

                  </span>

                </div>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
