"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function NotificationsPage() {

  const notifications = [
    {
      title: "Threat Alert",
      message: "Suspicious activity detected on protected assets.",
      level: "HIGH",
    },
    {
      title: "Recovery Alert",
      message: "Device recovery tracking system activated.",
      level: "MEDIUM",
    },
    {
      title: "Blockchain Alert",
      message: "High-risk wallet interaction detected.",
      level: "HIGH",
    },
    {
      title: "Payment Alert",
      message: "Subscription payment verified successfully.",
      level: "LOW",
    },
    {
      title: "System Alert",
      message: "All protection systems operating normally.",
      level: "LOW",
    },
  ];

  return (
    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Notification Center
          </h1>

          <p className="text-zinc-400 mt-3">
            Real-time cybersecurity alerts and system intelligence.
          </p>

        </div>

        <div className="space-y-4 mb-10">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500/20 rounded-2xl p-5"
            >

              <div className="flex items-center justify-between">

                <h2 className="font-bold text-xl">
                  {item.title}
                </h2>

                <span className="text-cyan-400 font-bold">
                  {item.level}
                </span>

              </div>

              <p className="text-zinc-300 mt-3">
                {item.message}
              </p>

            </div>

          ))}

        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <Link
            href="/profile"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Profile
          </Link>

          <Link
            href="/settings"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Settings
          </Link>

          <Link
            href="/command-center"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Command Center
          </Link>

        </div>

      </main>

    </ProtectedRoute>
  );
}
