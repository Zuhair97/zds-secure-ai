"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AIAgentPage() {

  const [analysis, setAnalysis] =
    useState([]);

  useEffect(() => {
    runAIAnalysis();
  }, []);

  async function runAIAnalysis() {

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

    const aiFindings = [];

    if (data.length >= 5) {

      aiFindings.push({
        level: "Medium",
        title:
          "Suspicious Activity Detected",
        description:
          "Multiple login sessions detected recently.",
      });

    }

    const uniqueDevices =
      [...new Set(
        data.map(
          (d) => d.device_info
        )
      )];

    if (uniqueDevices.length >= 3) {

      aiFindings.push({
        level: "High",
        title:
          "Multiple Devices Detected",
        description:
          "AI noticed logins from several devices.",
      });

    }

    if (aiFindings.length === 0) {

      aiFindings.push({
        level: "Safe",
        title:
          "System Secure",
        description:
          "AI did not detect suspicious behavior.",
      });

    }

    setAnalysis(aiFindings);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          AI Security Agent
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered threat analysis and behavioral intelligence.
        </p>

        <div className="grid gap-6">

          {analysis.map((item, index) => (

            <div
              key={index}
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
                  {item.title}
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

              <p className="text-zinc-200 text-lg">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
