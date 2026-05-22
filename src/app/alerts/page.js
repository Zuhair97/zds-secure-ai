"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AlertsPage() {

  const [alerts, setAlerts] =
    useState([]);

  const [stats, setStats] =
    useState({
      critical: 0,
      medium: 0,
      safe: 0,
    });

  useEffect(() => {
    fetchAlerts();
  }, []);

  async function fetchAlerts() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("login_history")
      .select("*")
      .eq("user_id", user.id)
      .order("login_time", {
        ascending: false,
      });

    if (!data) return;

    const knownDevices = [];
    const detectedAlerts = [];

    let critical = 0;
    let medium = 0;

    data.forEach((log) => {

      if (
        !knownDevices.includes(
          log.device_info
        )
      ) {

        knownDevices.push(
          log.device_info
        );

        detectedAlerts.push({
          id: log.id,
          type:
            "New Device Detected",
          risk: "Medium",
          email: log.email,
          time: log.login_time,
          device:
            log.device_info,
        });

        medium++;

      }

    });

    const safe =
      data.length - medium;

    setStats({
      critical,
      medium,
      safe,
    });

    setAlerts(detectedAlerts);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          AI Threat Center
        </h1>

        <p className="text-zinc-400 mb-10">
          Real-time cybersecurity monitoring and AI threat analysis.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-red-950 border border-red-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-red-400 mb-2">
              Critical Threats
            </h2>

            <p className="text-5xl font-bold">
              {stats.critical}
            </p>
          </div>

          <div className="bg-yellow-950 border border-yellow-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-2">
              Medium Threats
            </h2>

            <p className="text-5xl font-bold">
              {stats.medium}
            </p>
          </div>

          <div className="bg-green-950 border border-green-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-green-400 mb-2">
              Safe Sessions
            </h2>

            <p className="text-5xl font-bold">
              {stats.safe}
            </p>
          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-10">

          <h2 className="text-2xl font-bold mb-4">
            AI Risk Score
          </h2>

          <div className="w-full bg-zinc-800 rounded-full h-6 overflow-hidden">

            <div
              className="bg-yellow-500 h-6 rounded-full"
              style={{
                width: `${stats.medium * 20}%`,
              }}
            />

          </div>

          <p className="text-zinc-400 mt-3">
            AI detected risk based on login behavior and device analysis.
          </p>

        </div>

        <div className="grid gap-4">

          {alerts.length === 0 ? (

            <div className="bg-green-950 border border-green-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-green-400">
                No Threats Detected
              </h2>

            </div>

          ) : (

            alerts.map((alert) => (

              <div
                key={alert.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-2xl font-bold">
                    {alert.type}
                  </h2>

                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {alert.risk}
                  </span>

                </div>

                <p className="mb-2">
                  <span className="font-bold">
                    Email:
                  </span>{" "}
                  {alert.email}
                </p>

                <p className="mb-2">
                  <span className="font-bold">
                    Time:
                  </span>{" "}
                  {new Date(
                    alert.time
                  ).toLocaleString()}
                </p>

                <p className="text-sm text-zinc-400 break-all">
                  {alert.device}
                </p>

              </div>

            ))

          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
