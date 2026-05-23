"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function EmergencyLockdownPage() {

  const [status, setStatus] =
    useState("Normal");

  const [logs, setLogs] =
    useState([]);

  function activateLockdown() {

    setStatus("LOCKDOWN ACTIVE");

    setLogs([

      {
        title:
          "All Sessions Revoked",
        level: "Critical",
      },

      {
        title:
          "Suspicious Devices Isolated",
        level: "High",
      },

      {
        title:
          "AI Threat Containment Enabled",
        level: "Protected",
      },

      {
        title:
          "Emergency Protection Activated",
        level: "Protected",
      },

    ]);

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Emergency Lockdown
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered autonomous cyber defense and emergency containment system.
        </p>

        <div className={`rounded-2xl p-8 border mb-10 ${
          status ===
          "LOCKDOWN ACTIVE"
            ? "bg-red-950 border-red-700"
            : "bg-green-950 border-green-700"
        }`}>

          <h2 className="text-3xl font-bold mb-4">
            Security Status
          </h2>

          <p className="text-5xl font-bold">
            {status}
          </p>

        </div>

        <button
          onClick={activateLockdown}
          className="bg-red-600 hover:bg-red-700 transition px-8 py-5 rounded-2xl text-2xl font-bold mb-12"
        >

          Activate Emergency Lockdown

        </button>

        <div className="grid gap-6">

          {logs.map(
            (item, index) => (

              <div
                key={index}
                className={`rounded-2xl p-6 border ${
                  item.level ===
                  "Critical"
                    ? "bg-red-950 border-red-700"
                    : item.level ===
                      "High"
                    ? "bg-orange-950 border-orange-700"
                    : "bg-green-950 border-green-700"
                }`}
              >

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    item.level ===
                    "Critical"
                      ? "bg-red-500 text-white"
                      : item.level ===
                        "High"
                      ? "bg-orange-500 text-black"
                      : "bg-green-500 text-black"
                  }`}>

                    {item.level}

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
