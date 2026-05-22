"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function IncidentsPage() {

  const [incidents, setIncidents] =
    useState([]);

  useEffect(() => {
    generateIncidents();
  }, []);

  async function generateIncidents() {

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

    const uniqueDevices =
      [...new Set(
        data.map(
          (d) => d.device_info
        )
      )];

    const generated = [];

    if (uniqueDevices.length >= 3) {

      generated.push({
        id: 1,
        severity: "High",
        title:
          "Multiple Device Access",
        status: "Investigating",
        recommendation:
          "Enable stronger session verification and MFA.",
      });

    }

    if (data.length >= 5) {

      generated.push({
        id: 2,
        severity: "Medium",
        title:
          "Frequent Login Activity",
        status: "Monitoring",
        recommendation:
          "Monitor user authentication patterns closely.",
      });

    }

    if (generated.length === 0) {

      generated.push({
        id: 3,
        severity: "Safe",
        title:
          "No Active Incidents",
        status: "Secure",
        recommendation:
          "System operating normally.",
      });

    }

    setIncidents(generated);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Incident Response Center
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered incident monitoring and response management.
        </p>

        <div className="grid gap-6">

          {incidents.map((incident) => (

            <div
              key={incident.id}
              className={`rounded-2xl p-6 border ${
                incident.severity === "High"
                  ? "bg-red-950 border-red-700"
                  : incident.severity === "Medium"
                  ? "bg-yellow-950 border-yellow-700"
                  : "bg-green-950 border-green-700"
              }`}
            >

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-3xl font-bold">
                  {incident.title}
                </h2>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                  incident.severity === "High"
                    ? "bg-red-500 text-white"
                    : incident.severity === "Medium"
                    ? "bg-yellow-500 text-black"
                    : "bg-green-500 text-black"
                }`}>
                  {incident.severity}
                </span>

              </div>

              <p className="mb-3 text-lg">
                <span className="font-bold">
                  Status:
                </span>{" "}
                {incident.status}
              </p>

              <p className="text-zinc-200 text-lg leading-8">
                {incident.recommendation}
              </p>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
