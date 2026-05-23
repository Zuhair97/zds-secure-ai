"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ThreatIntelPage() {

  const [intel, setIntel] =
    useState({
      devices: 0,
      sessions: 0,
      threats: 0,
      score: 95,
      recommendations: [],
    });

  useEffect(() => {
    generateIntel();
  }, []);

  async function generateIntel() {

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

    const threats =
      uniqueDevices.length > 2
        ? uniqueDevices.length - 2
        : 0;

    let score = 95 - (threats * 10);

    if (score < 40) {
      score = 40;
    }

    const recommendations = [];

    if (threats >= 1) {
      recommendations.push(
        "Enable multi-factor authentication."
      );

      recommendations.push(
        "Review suspicious login sessions."
      );
    }

    if (uniqueDevices.length >= 3) {
      recommendations.push(
        "Limit account access to trusted devices."
      );
    }

    if (recommendations.length === 0) {
      recommendations.push(
        "System security posture is healthy."
      );
    }

    setIntel({
      devices: uniqueDevices.length,
      sessions: data.length,
      threats,
      score,
      recommendations,
    });
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Threat Intelligence Center
        </h1>

        <p className="text-zinc-400 mb-10">
          Executive AI-powered cybersecurity analytics and intelligence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Devices
            </h2>

            <p className="text-5xl font-bold">
              {intel.devices}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Sessions
            </h2>

            <p className="text-5xl font-bold">
              {intel.sessions}
            </p>
          </div>

          <div className="bg-red-950 border border-red-700 rounded-2xl p-6">
            <h2 className="text-red-400 mb-2">
              Threats
            </h2>

            <p className="text-5xl font-bold">
              {intel.threats}
            </p>
          </div>

          <div className="bg-blue-950 border border-blue-700 rounded-2xl p-6">
            <h2 className="text-blue-400 mb-2">
              Security Score
            </h2>

            <p className="text-5xl font-bold">
              {intel.score}%
            </p>
          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-10">

          <h2 className="text-3xl font-bold mb-5">
            AI Recommendations
          </h2>

          <div className="grid gap-4">

            {intel.recommendations.map(
              (item, index) => (

                <div
                  key={index}
                  className="bg-zinc-800 rounded-xl p-4"
                >

                  <p className="text-lg">
                    • {item}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            Executive Summary
          </h2>

          <p className="text-zinc-300 text-lg leading-8">

            ZDS Secure AI continuously analyzes authentication behavior,
            monitors threat exposure,
            evaluates device intelligence,
            and generates AI-powered cybersecurity recommendations
            for enterprise-grade protection.

          </p>

        </div>

      </main>

    </ProtectedRoute>
  );
}
