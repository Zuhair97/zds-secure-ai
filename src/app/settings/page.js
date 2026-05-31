"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          Settings Center
        </h1>

        <div className="space-y-4">

          <div className="bg-zinc-900 p-4 rounded-2xl">
            Language Settings
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            Notification Preferences
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            Security Preferences
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            Recovery Preferences
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            Billing Preferences
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            API Access Settings
          </div>

        </div>

      </main>
    </ProtectedRoute>
  );
}
