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

    const { data } = await supabase
      .from("login_history")
      .select("*")
      .eq("user_id", user.id)
      .order("login_time", {
        ascending: false,
      });

    if (data) {
      setLogs(data);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Security Activity
      </h1>

      <div className="grid gap-4">

        {logs.map((log) => (

          <div
            key={log.id}
            className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl"
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

            <p className="text-sm text-gray-400 mt-2 break-all">
              {log.device_info}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}
