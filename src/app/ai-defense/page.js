"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AIDefensePage() {

  const [status, setStatus] =
    useState("Monitoring");

  const [events, setEvents] =
    useState([]);

  function runDefenseEngine() {

    setStatus(
      "Autonomous Defense Active"
    );

    setEvents([

      {
        title:
          "Behavioral Threat Detected",
        level: "Critical",
        action:
          "AI identified suspicious authentication behavior.",
      },

      {
        title:
          "Risky Session Isolated",
        level: "High",
        action:
          "Suspicious session automatically isolated.",
      },

      {
        title:
          "Autonomous Containment",
        level: "Protected",
        action:
          "AI activated threat containment successfully.",
      },

      {
        title:
          "Security Stabilized",
        level: "Protected",
        action:
          "Threat level reduced after autonomous response.",
      },

    ]);

  }

  function getStyles(level) {

    switch (level) {

      case "Critical":
        return "bg-red-950 border-red-700";

      case "High":
        return "bg-orange-950 border-orange-700";

      default:
        return "bg-green-950 border-green-700";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Autonomous AI Defense
            </h1>

            <p className="text-zinc-400">
              Machine-speed AI-powered cyber defense engine.
            </p>

          </div>

          <div className="bg-blue-500 text-black px-5 py-2 rounded-full font-bold">

            AI ACTIVE

          </div>

        </div>

        <div className="bg-blue-950 border border-blue-700 rounded-2xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-4">
            Defense Status
          </h2>

          <p className="text-5xl font-bold">
            {status}
          </p>

        </div>

        <button
          onClick={runDefenseEngine}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-5 rounded-2xl text-2xl font-bold mb-12"
        >

          Run AI Defense Engine

        </button>

        <div className="grid gap-6">

          {events.map(
            (event, index) => (

              <div
                key={index}
                className={`rounded-2xl border p-6 ${getStyles(event.level)}`}
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {event.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    event.level ===
                    "Critical"
                      ? "bg-red-500 text-white"
                      : event.level ===
                        "High"
                      ? "bg-orange-500 text-black"
                      : "bg-green-500 text-black"
                  }`}>

                    {event.level}

                  </span>

                </div>

                <p className="text-zinc-200 text-lg leading-8">
                  {event.action}
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
