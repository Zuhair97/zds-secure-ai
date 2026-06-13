"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityPage() {
  const [logs, setLogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [risk, setRisk] = useState({
    score: 0,
    level: "LOW",
  });

  useEffect(() => {
    loadSecurityData();
  }, []);

  async function loadSecurityData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", user.email)
      .single();

    if (profileData) {
      setProfile(profileData);
    }

    const { data: loginData, error } = await supabase
      .from("login_history")
      .select("*")
      .eq("user_id", user.id)
      .order("login_time", {
        ascending: false,
      });

    if (!error && loginData) {
      setLogs(loginData);

      const uniqueDevices = [
        ...new Set(
          loginData.map(
            (x) => x.device_info
          )
        ),
      ];

      let score = 0;

      score += loginData.length * 2;
      score += uniqueDevices.length * 10;

      if (score > 100) {
        score = 100;
      }

      let level = "LOW";

      if (score >= 70) {
        level = "CRITICAL";
      } else if (score >= 50) {
        level = "HIGH";
      } else if (score >= 25) {
        level = "MEDIUM";
      }

      setRisk({
        score,
        level,
      });
    }
  }

  function riskColor() {
    switch (risk.level) {
      case "CRITICAL":
        return "text-red-500";

      case "HIGH":
        return "text-orange-500";

      case "MEDIUM":
        return "text-yellow-500";

      default:
        return "text-green-500";
    }
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-8">
          Security Intelligence Center
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Risk Score
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              {risk.score}
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Risk Level
            </h2>

            <p className={`text-4xl font-bold ${riskColor()}`}>
              {risk.level}
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Security Level
            </h2>

            <p className="text-4xl font-bold">
              {profile?.security_level || "normal"}
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-zinc-400 mb-2">
              Subscription
            </h2>

            <p className="text-4xl font-bold">
              {profile?.subscription_plan || "Free"}
            </p>
          </div>

        </div>

        <div className="mb-8 bg-zinc-900 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            AI Security Assessment
          </h2>

          <p className="text-zinc-300 leading-8">
            Current account risk level is
            {" "}
            <span className={riskColor()}>
              {risk.level}
            </span>.
            AI calculated this score using
            authentication activity,
            device diversity and account behavior.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Login Activity
        </h2>

        {logs.length === 0 ? (
          <p>No login activity found.</p>
        ) : (
          <div className="grid gap-4">

            {logs.map((log) => (

              <div
                key={log.id}
                className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
              >

                <p>
                  <span className="font-bold">
                    Email:
                  </span>{" "}
                  {log.email}
                </p>

                <p>
                  <span className="font-bold">
                    Status:
                  </span>{" "}
                  {log.status}
                </p>

                <p>
                  <span className="font-bold">
                    Login Time:
                  </span>{" "}
                  {new Date(
                    log.login_time
                  ).toLocaleString()}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {log.device_info}
                </p>

              </div>

            ))}

          </div>
        )}

      </main>
    </ProtectedRoute>
  );
}
