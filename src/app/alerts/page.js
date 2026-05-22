"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AlertsPage() {

  const [alerts, setAlerts] =
    useState([]);

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
          email: log.email,
          time: log.login_time,
          device:
            log.device_info,
        });
      }

    });

    setAlerts(detectedAlerts);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-8">
          Security Alerts
        </h1>

        {alerts.length === 0 ? (

          <p className="text-zinc-400">
            No threats detected.
          </p>

        ) : (

          <div className="grid gap-4">

            {alerts.map((alert) => (

              <div
                key={alert.id}
                className="bg-red-950 border border-red-700 rounded-2xl p-5"
              >

                <h2 className="text-2xl font-bold text-red-400 mb-3">
                  {alert.type}
                </h2>

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

                <p className="text-sm text-zinc-300 break-all">
                  {alert.device}
                </p>

              </div>

            ))}

          </div>

        )}

      </main>

    </ProtectedRoute>
  );
}
