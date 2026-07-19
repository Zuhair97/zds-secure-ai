
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-auth";

export default function ThreatFeed() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadThreats() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("alerts")
        .select("*")
        .eq("user_id", user.id)
        .eq("resolved", false)
        .order("created_at", { ascending: false })
        .limit(10);

      if (!error) {
        setAlerts(data || []);
      }

      setLoading(false);
    }

    loadThreats();

    const channel = supabase
      .channel("live-threat-feed")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "alerts",
        },
        () => {
          loadThreats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  function severityColor(level) {
    switch ((level || "").toUpperCase()) {
      case "CRITICAL":
        return "bg-red-500";
      case "HIGH":
        return "bg-orange-500";
      case "MEDIUM":
        return "bg-yellow-500";
      case "LOW":
        return "bg-green-500";
      default:
        return "bg-cyan-500";
    }
  }

  return (
    <div className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-6 shadow-lg">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold text-cyan-400">
          Live Threat Feed
        </h2>

        <span className="text-xs text-slate-400">
          Real-Time
        </span>

      </div>

      {loading ? (

        <div className="text-slate-400">
          Loading Threat Intelligence...
        </div>

      ) : alerts.length === 0 ? (

        <div className="rounded-xl bg-slate-800 p-6 text-center">

          <p className="text-green-400 font-bold">
            No Active Threats
          </p>

          <p className="text-slate-400 mt-2 text-sm">
            Your protected devices are currently safe.
          </p>

        </div>

      ) : (

        <div className="space-y-3">

          {alerts.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`w-3 h-3 rounded-full ${severityColor(
                    item.severity
                  )}`}
                />

                <div>

                  <p className="text-white font-semibold">
                    {item.message}
                  </p>

                  <p className="text-slate-400 text-sm">

                    {item.source || "Unknown Source"}

                  </p>

                  <p className="text-xs text-slate-500 mt-1">

                    {new Date(item.created_at).toLocaleString()}

                  </p>

                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${severityColor(
                  item.severity
                )}`}
              >

                {item.severity}

              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}








