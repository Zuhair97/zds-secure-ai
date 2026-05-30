"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function NotificationsPage() {

  const notifications = [
    {
      title: "Threat Alert",
      message: "Suspicious activity detected on protected assets."
    },
    {
      title: "Recovery Alert",
      message: "Device recovery tracking system activated."
    },
    {
      title: "Blockchain Alert",
      message: "High-risk wallet interaction detected."
    },
    {
      title: "Payment Alert",
      message: "Subscription payment verified successfully."
    },
    {
      title: "System Alert",
      message: "All protection systems operating normally."
    }
  ];

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          Notification Center
        </h1>

        <div className="space-y-4">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500/20 rounded-2xl p-4"
            >
              <h2 className="font-bold text-xl">
                {item.title}
              </h2>

              <p className="text-zinc-300 mt-2">
                {item.message}
              </p>
            </div>

          ))}

        </div>

      </main>
    </ProtectedRoute>
  );
}
