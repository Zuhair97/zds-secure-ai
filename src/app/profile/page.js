"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-4xl font-bold text-cyan-400">
          User Security Profile
        </h1>

        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900">
            Trust Score: 96/100
          </div>

          <div className="p-4 rounded-xl bg-zinc-900">
            Subscription: Premium
          </div>

          <div className="p-4 rounded-xl bg-zinc-900">
            Protected Devices: 4
          </div>

          <div className="p-4 rounded-xl bg-zinc-900">
            Protected Wallets: 3
          </div>

          <div className="p-4 rounded-xl bg-zinc-900">
            Security Status: Protected
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
