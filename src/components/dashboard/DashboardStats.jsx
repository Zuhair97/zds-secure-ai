"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Smartphone,
  AlertTriangle,
  MapPinned,
} from "lucide-react";

import { supabase } from "@/lib/supabase-auth";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    trustScore: "--",
    protectedDevices: 0,
    threatAlerts: 0,
    recoveryStatus: "Unknown",
  });

  useEffect(() => {
    async function loadStats() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // Trust Score
      const { data: trust } = await supabase
        .from("device_trust")
        .select("trust_score")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      // Devices
      const { data: devices } = await supabase
        .from("device_registry")
        .select("id,recovery_mode")
        .eq("user_id", user.id);

      // Alerts
      const { count: alertsCount } = await supabase
        .from("alerts")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("resolved", false);

      const recoveryReady =
        devices?.some((d) => d.recovery_mode === true) ?? false;

      setStats({
        trustScore: trust?.trust_score ?? "--",
        protectedDevices: devices?.length ?? 0,
        threatAlerts: alertsCount ?? 0,
        recoveryStatus: recoveryReady ? "Ready" : "Disabled",
      });
    }

    loadStats();
  }, []);

  const cards = [
    {
      title: "Trust Score",
      value: stats.trustScore,
      subtitle: "Device Trust Engine",
      color: "text-green-500",
      icon: ShieldCheck,
    },
    {
      title: "Protected Devices",
      value: stats.protectedDevices,
      subtitle: "Registered",
      color: "text-cyan-400",
      icon: Smartphone,
    },
    {
      title: "Threat Alerts",
      value: stats.threatAlerts,
      subtitle: "Unresolved",
      color: "text-red-500",
      icon: AlertTriangle,
    },
    {
      title: "Recovery Status",
      value: stats.recoveryStatus,
      subtitle: "Recovery Engine",
      color: "text-purple-400",
      icon: MapPinned,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  {card.title}
                </p>

                <h2 className={`mt-3 text-3xl font-bold ${card.color}`}>
                  {card.value}
                </h2>

                <p className="mt-2 text-xs text-slate-500">
                  {card.subtitle}
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <Icon
                  className={card.color}
                  size={28}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}






