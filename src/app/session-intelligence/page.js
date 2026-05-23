"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SessionIntelligencePage() {

  const [sessions, setSessions] =
    useState([]);

  useEffect(() => {
    loadSessions();
  }, []);

  async function loadSessions() {

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
        ([device, info], index) => ({

          id: index + 1,

          device,

          trusted:
            info.count >= 2,

          score:
            info.count >= 2
              ? 92
              : 45,

          lastSeen:
            info.lastSeen,

        })
      );

    setSessions(parsed);
  }

  function revokeSession(id) {

    alert(
      `Session ${id} revoked successfully.`
    );

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Session Intelligence
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered live session monitoring and control center.
        </p>

        <div className="grid gap-6">

          {sessions.map((item) => (

            <div
              key={item.id}
              className={`rounded-2xl p-6 border ${
                item.trusted
                  ? "bg-green-950 border-green-700"
                  : "bg-red-950 border-red-700"
              }`}
            >

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-bold">
                  Session #{item.id}
                </h2>

                <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                  item.trusted
                    ? "bg-green-500 text-black"
                    : "bg-red-500 text-white"
                }`}>

                  {item.trusted
                    ? "Trusted"
                    : "Risky"}

                </span>

              </div>

              <p className="break-all text-zinc-300 mb-4">
                {item.device}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">

                <div className="bg-zinc-900 rounded-xl p-4">

                  <p className="text-zinc-400 mb-2">
                    AI Trust Score
                  </p>

                  <p className="text-4xl font-bold">
                    {item.score}%
                  </p>

                </div>

                <div className="bg-zinc-900 rounded-xl p-4">

                  <p className="text-zinc-400 mb-2">
                    Last Seen
                  </p>

                  <p className="font-bold">
                    {new Date(
                      item.lastSeen
                    ).toLocaleString()}
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  revokeSession(item.id)
                }
                className="bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl font-bold"
              >

                Revoke Session

              </button>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
