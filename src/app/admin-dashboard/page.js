"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboard() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    async function loadStats() {

      const { data } =
        await supabase
          .from("subscription_stats")
          .select("*")
          .single();

      setStats(data);
    }

    loadStats();

  }, []);

  const monthlyRevenue =
    (stats?.premium_users || 0) * 5000;

  const annualRevenue =
    monthlyRevenue * 12;

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-10">
          ZDS Revenue Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h2>Total Users</h2>
            <p className="text-4xl font-bold">
              {stats?.total_users || 0}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h2>Free Users</h2>
            <p className="text-4xl font-bold">
              {stats?.free_users || 0}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h2>Premium Users</h2>
            <p className="text-4xl font-bold">
              {stats?.premium_users || 0}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h2>Monthly Revenue</h2>
            <p className="text-4xl font-bold">
              ₦{monthlyRevenue.toLocaleString()}
            </p>
          </div>

        </div>

        <div className="mt-8 bg-zinc-900 p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-4">
            Annual Revenue Projection
          </h2>

          <p className="text-5xl font-bold text-cyan-400">
            ₦{annualRevenue.toLocaleString()}
          </p>

        </div>

      </main>

    </ProtectedRoute>

  );
}
