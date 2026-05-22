"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SecurityPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("login_history")
      .select("*")
      .eq("user_id", user.id)
      .order("login_time", {
        ascending: false,
      });

    if (!error && data) {
      setLogs(data);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">
        Security Activity
      </h1>

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
  );
}
