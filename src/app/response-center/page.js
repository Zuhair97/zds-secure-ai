"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ResponseCenterPage() {

  const [actions, setActions] =
    useState([]);

  useEffect(() => {
    generateActions();
  }, []);

  async function generateActions() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("login_history")
      .select("*")
      .eq("user_id", user.id);

    if (!data) return;

    const uniqueDevices =
      [...new Set(
        data.map(
          (d) => d.device_info
        )
      )];

    const aiActions = [];

    if (uniqueDevices.length >= 3) {

      aiActions.push({
        id: 1,
        level: "High",
        action:
          "Force Password Reset",
        status: "Recommended",
        description:
          "AI detected multiple devices and recommends password reset.",
      });

      aiActions.push({
        id: 2,
        level: "Medium",
        action:
          "Enable MFA",
        status: "Pending",
        description:
          "Multi-factor authentication recommended for stronger protection.",
      });

    }

    if (data.length >= 5) {

      aiActions.push({
        id: 3,
        level: "Medium",
        action:
          "Review Login Sessions",
        status: "Monitoring",
        description:
          "AI recommends reviewing recent authentication activity.",
      });

    }

    if (aiActions.length === 0) {

      aiActions.push({
        id: 4,
        level: "Safe",
        action:
          "No Response Needed",
        status: "Secure",
        description:
          "System security posture is stable.",
      });

    }

    setActions(aiActions);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          AI Response Center
        </h1>

        <p className="text-zinc-400 mb-10">
          Automated AI-driven threat response and security orchestration.
        </p>

        <div className="grid gap-6">

          {actions.map((item) => (

            <div
              key={item.id}
              className={`rounded-2xl p-6 border ${
                item.level === "High"
                  ? "bg-red-950 border-red-700"
                  : item.level === "Medium"
                  ? "bg-yellow-950 border-yellow-700"
                  : "bg-green-950 border-green-700"
              }`}
            >

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-3xl font-bold">
                  {item.action}
                </h2>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                  item.level === "High"
                    ? "bg-red-500 text-white"
                    : item.level === "Medium"
                    ? "bg-yellow-500 text-black"
                    : "bg-green-500 text-black"
                }`}>
                  {item.level}
                </span>

              </div>

              <p className="mb-3 text-lg">
                <span className="font-bold">
                  Status:
                </span>{" "}
                {item.status}
              </p>

              <p className="text-zinc-200 text-lg leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
