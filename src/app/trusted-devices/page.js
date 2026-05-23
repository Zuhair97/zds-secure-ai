"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TrustedDevicesPage() {

  const [devices, setDevices] =
    useState([]);

  const [risk, setRisk] =
    useState("Low");

  useEffect(() => {
    analyzeDevices();
  }, []);

  async function analyzeDevices() {

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

    const grouped = {};

    data.forEach((item) => {

      if (!grouped[item.device_info]) {

        grouped[item.device_info] = {
          count: 0,
          lastSeen:
            item.login_time,
        };

      }

      grouped[item.device_info]
        .count += 1;

    });

    const parsed =
      Object.entries(grouped).map(
        ([device, info]) => ({

          device,

          count: info.count,

          lastSeen:
            info.lastSeen,

          trusted:
            info.count >= 2,

        })
      );

    const untrusted =
      parsed.filter(
        (d) => !d.trusted
      ).length;

    if (untrusted >= 3) {

      setRisk("High");

    } else if (
      untrusted >= 1
    ) {

      setRisk("Medium");

    }

    setDevices(parsed);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Trusted Devices Engine
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered trusted device intelligence and anomaly detection.
        </p>

        <div className={`rounded-2xl p-6 border mb-10 ${
          risk === "High"
            ? "bg-red-950 border-red-700"
            : risk === "Medium"
            ? "bg-yellow-950 border-yellow-700"
            : "bg-green-950 border-green-700"
        }`}>

          <h2 className="text-3xl font-bold mb-3">
            AI Risk Status
          </h2>

          <p className="text-5xl font-bold">
            {risk}
          </p>

        </div>

        <div className="grid gap-6">

          {devices.map(
            (item, index) => (

              <div
                key={index}
                className={`rounded-2xl p-6 border ${
                  item.trusted
                    ? "bg-green-950 border-green-700"
                    : "bg-red-950 border-red-700"
                }`}
              >

                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-2xl font-bold">
                    Device #{index + 1}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    item.trusted
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}>

                    {item.trusted
                      ? "Trusted"
                      : "Unknown"}

                  </span>

                </div>

                <p className="text-zinc-300 break-all mb-4">
                  {item.device}
                </p>

                <p className="mb-2">
                  Login Count:
                  {" "}
                  <span className="font-bold">
                    {item.count}
                  </span>
                </p>

                <p>
                  Last Seen:
                  {" "}
                  <span className="font-bold">
                    {new Date(
                      item.lastSeen
                    ).toLocaleString()}
                  </span>
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
