


"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AdminRoute from "@/components/AdminRoute";

export default function AdminDashboard() {

const [stats, setStats] = useState(null);

useEffect(() => {


async function loadStats() {

  const { data, error } =
    await supabase
      .from("subscription_stats")
      .select("*")
      .maybeSingle();

  if (!error) {
    setStats(data);
  }

}

loadStats();


}, []);

const annualRevenue =


((stats?.personal_users || 0) * 2500) +

((stats?.premium_users || 0) * 5000) +

((stats?.professional_users || 0) * 10000) +

((stats?.web3_users || 0) * 10000) +

((stats?.business_users || 0) * 25000);


const monthlyProjection =
Math.round(annualRevenue / 12);

return (


<AdminRoute>

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
        <h2>Personal</h2>
        <p className="text-4xl font-bold">
          {stats?.personal_users || 0}
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Premium</h2>
        <p className="text-4xl font-bold">
          {stats?.premium_users || 0}
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Professional</h2>
        <p className="text-4xl font-bold">
          {stats?.professional_users || 0}
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Web3</h2>
        <p className="text-4xl font-bold">
          {stats?.web3_users || 0}
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Business</h2>
        <p className="text-4xl font-bold">
          {stats?.business_users || 0}
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Enterprise</h2>
        <p className="text-4xl font-bold">
          {stats?.enterprise_users || 0}
        </p>
      </div>

    </div>

    <div className="mt-8 grid md:grid-cols-2 gap-6">

      <div className="bg-zinc-900 p-6 rounded-3xl">

        <h2 className="text-2xl font-bold mb-4">
          Annual Revenue
        </h2>

        <p className="text-5xl font-bold text-cyan-400">
          ₦{annualRevenue.toLocaleString()}
        </p>

      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">

        <h2 className="text-2xl font-bold mb-4">
          Monthly Projection
        </h2>

        <p className="text-5xl font-bold text-green-400">
          ₦{monthlyProjection.toLocaleString()}
        </p>

      </div>

    </div>

  </main>

</AdminRoute>

);

}












