"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {

    async function loadData() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      if (!user) return;

      const { data } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(data);
    }

    loadData();

  }, []);

  return (
    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              ZDS Secure AI Profile
            </h1>

            <p className="text-zinc-400 mt-3">
              Live User Security Intelligence
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">
            VERIFIED
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-3xl p-6 border border-cyan-500/20">

            <h2 className="text-2xl font-bold mb-5">
              Account Information
            </h2>

            <div className="space-y-3 text-zinc-300">

              <p>
                Email: {user?.email || "Loading..."}
              </p>

              <p>
                User ID: {user?.id || "Loading..."}
              </p>

              <p>
                Full Name: {profile?.full_name || "Not Set"}
              </p>

              <p>
                Country: {profile?.country || "Not Set"}
              </p>

              <p>
                Email Verified:
                {" "}
                {user?.email_confirmed_at ? "Yes" : "No"}
              </p>

            </div>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-cyan-500/20">

            <h2 className="text-2xl font-bold mb-5">
              Security Status
            </h2>

            <div className="space-y-3 text-zinc-300">

              <p>
                Trust Score:
                {" "}
                {profile?.trust_score ?? 100}
              </p>

              <p>
                Subscription:
                {" "}
                {profile?.subscription_plan || "Free"}
              </p>

              <p>
                Protected Devices:
                {" "}
                {profile?.protected_devices ?? 0}
              </p>

              <p>
                Protected Wallets:
                {" "}
                {profile?.protected_wallets ?? 0}
              </p>

              <p>
                Role:
                {" "}
                {profile?.role || "user"}
              </p>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <Link
            href="/settings"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Settings Center
          </Link>

          <Link
            href="/notifications"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Notification Center
          </Link>

          <Link
            href="/command-center"
            className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Command Center
          </Link>

        </div>

      </main>

    </ProtectedRoute>
  );
}







