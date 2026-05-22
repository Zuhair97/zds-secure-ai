"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {

  const [stats, setStats] =
    useState({
      logins: 0,
      threats: 0,
      incidents: 0,
      risk: "Low",
    });

  useEffect(() => {
    loadOverview();
  }, []);

  async function loadOverview() {

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

    const incidents =
      threats >= 1 ? threats : 0;

    let risk = "Low";

    if (threats >= 3) {
      risk = "High";
    } else if (threats >= 1) {
      risk = "Medium";
    }

    setStats({
      logins: data.length,
      threats,
      incidents,
      risk,
    });
  }

  const links = [
    {
      title: "Assets",
      link: "/assets",
    },

    {
      title: "Alerts",
      link: "/alerts",
    },

    {
      title: "AI Agent",
      link: "/ai-agent",
    },

    {
      title: "Incidents",
      link: "/incidents",
    },

    {
      title: "Security Activity",
      link: "/security",
    },

    {
      title: "Wallets",
      link: "/wallets",
    },
  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white flex">

        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-6 hidden md:block">

          <h1 className="text-3xl font-bold mb-10">
            ZDS Secure AI
          </h1>

          <nav className="flex flex-col gap-4">

            {links.map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="text-zinc-300 hover:text-white transition"
              >
                {item.title}
              </Link>

            ))}

          </nav>

        </aside>

        <section className="flex-1 p-6">

          <h1 className="text-5xl font-bold mb-3">
            Security Command Center
          </h1>

          <p className="text-zinc-400 mb-10">
            Enterprise AI-powered cybersecurity operations platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-zinc-400 mb-2">
                Total Logins
              </h2>

              <p className="text-5xl font-bold">
                {stats.logins}
              </p>
            </div>

            <div className="bg-red-950 border border-red-700 rounded-2xl p-6">
              <h2 className="text-red-400 mb-2">
                Threats
              </h2>

              <p className="text-5xl font-bold">
                {stats.threats}
              </p>
            </div>

            <div className="bg-yellow-950 border border-yellow-700 rounded-2xl p-6">
              <h2 className="text-yellow-400 mb-2">
                Incidents
              </h2>

              <p className="text-5xl font-bold">
                {stats.incidents}
              </p>
            </div>

            <div className={`rounded-2xl p-6 border ${
              stats.risk === "High"
                ? "bg-red-950 border-red-700"
                : stats.risk === "Medium"
                ? "bg-yellow-950 border-yellow-700"
                : "bg-green-950 border-green-700"
            }`}>

              <h2 className="mb-2">
                AI Risk
              </h2>

              <p className="text-5xl font-bold">
                {stats.risk}
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {links.map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >

                <h2 className="text-2xl font-bold mb-3">
                  {item.title}
                </h2>

                <p className="text-zinc-400">
                  Open {item.title} module.
                </p>

              </Link>

            ))}

          </div>

        </section>

      </main>

    </ProtectedRoute>
  );
}
