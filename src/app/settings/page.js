"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SettingsPage() {
  const settings = [
    "Language Settings",
    "Notification Preferences",
    "Security Preferences",
    "Recovery Preferences",
    "Billing Preferences",
    "API Access Settings",
  ];

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Settings Center
          </h1>

          <p className="text-zinc-400 mt-3">
            Configure your ZDS Secure AI experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">

          {settings.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20"
            >
              {item}
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
            href="/notifications"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Notifications
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
