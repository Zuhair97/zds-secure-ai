"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ControlPanelPage() {

  const [settings, setSettings] =
    useState({
      aiProtection: true,
      mfa: false,
      automation: true,
      sessionProtection: true,
    });

  function toggleSetting(key) {

    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  }

  const cards = [
    {
      title: "AI Protection",
      key: "aiProtection",
      description:
        "AI-powered threat analysis and monitoring.",
    },

    {
      title: "Multi-Factor Authentication",
      key: "mfa",
      description:
        "Additional authentication security layer.",
    },

    {
      title: "Response Automation",
      key: "automation",
      description:
        "Automated AI incident response actions.",
    },

    {
      title: "Session Protection",
      key: "sessionProtection",
      description:
        "Protect active authentication sessions.",
    },
  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Security Control Panel
        </h1>

        <p className="text-zinc-400 mb-10">
          Centralized AI cybersecurity configuration and defense management.
        </p>

        <div className="grid gap-6">

          {cards.map((item) => (

            <div
              key={item.key}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <div className="flex items-center justify-between mb-4">

                <div>

                  <h2 className="text-3xl font-bold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-zinc-400 text-lg">
                    {item.description}
                  </p>

                </div>

                <button
                  onClick={() =>
                    toggleSetting(item.key)
                  }
                  className={`px-5 py-3 rounded-xl font-bold transition ${
                    settings[item.key]
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >

                  {settings[item.key]
                    ? "Enabled"
                    : "Disabled"}

                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">

          <h2 className="text-3xl font-bold mb-4">
            AI Recommendation
          </h2>

          <p className="text-zinc-300 text-lg leading-8">

            ZDS Secure AI recommends enabling
            multi-factor authentication and maintaining
            automated AI protection for stronger enterprise-grade security posture.

          </p>

        </div>

      </main>

    </ProtectedRoute>
  );
}
