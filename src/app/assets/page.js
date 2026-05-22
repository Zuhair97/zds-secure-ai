"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AssetsPage() {

  const [stats, setStats] =
    useState({
      totalLogins: 0,
      threats: 0,
      safeSessions: 0,
      risk: "Low",
    });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("login_history")
      .select("*")
      .eq("user_id", user.id);

    if (!data) return;

    const totalLogins =
      data.length;

    const uniqueDevices =
      [...new Set(
        data.map(
          (d) => d.device_info
        )
      )];

    const threats =
      uniqueDevices.length > 2
        ? uniqueDevices.length - 2
        : 0;

    const safeSessions =
      totalLogins - threats;

    let risk = "Low";

    if (threats >= 3) {
      risk = "High";
    } else if (threats >= 1) {
      risk = "Medium";
    }

    setStats({
      totalLogins,
      threats,
      safeSessions,
      risk,
    });
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Security Assets Center
        </h1>

        <p className="text-zinc-400 mb-10">
          Real-time cybersecurity analytics and AI monitoring.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl text-zinc-400 mb-2">
              Total Logins
            </h2>

            <p className="text-5xl font-bold">
              {stats.totalLogins}
            </p>
          </div>

          <div className="bg-red-950 border border-red-700 rounded-2xl p-6">
            <h2 className="text-xl text-red-400 mb-2">
              Threats
            </h2>

            <p className="text-5xl font-bold">
              {stats.threats}
            </p>
          </div>

          <div className="bg-green-950 border border-green-700 rounded-2xl p-6">
            <h2 className="text-xl text-green-400 mb-2">
              Safe Sessions
            </h2>

            <p className="text-5xl font-bold">
              {stats.safeSessions}
            </p>
          </div>

          <div className={`rounded-2xl p-6 border ${
            stats.risk === "High"
              ? "bg-red-950 border-red-700"
              : stats.risk === "Medium"
              ? "bg-yellow-950 border-yellow-700"
              : "bg-blue-950 border-blue-700"
          }`}>

            <h2 className="text-xl mb-2">
              AI Risk Level
            </h2>

            <p className="text-5xl font-bold">
              {stats.risk}
            </p>

          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            AI Security Summary
          </h2>

          <p className="text-zinc-300 text-lg leading-8">

            ZDS Secure AI is actively monitoring authentication activity,
            detecting suspicious behavior,
            analyzing device intelligence,
            and calculating real-time risk exposure
            using AI-powered security analytics.

          </p>

        </div>

      </main>

    </ProtectedRoute>
  );
}
