"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SubscriptionsPage() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function verifyPayment() {

      const params =
        new URLSearchParams(window.location.search);

      const reference =
        params.get("reference");

      if (!reference) return;

      try {

        const response = await fetch(
          "/api/paystack/upgrade",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reference,
            }),
          }
        );

        const data =
          await response.json();

        if (data.success) {

          alert(
            "Premium Africa activated successfully."
          );

          window.history.replaceState(
            {},
            "",
            "/subscriptions"
          );

        }

      } catch (error) {

        console.error(error);

      }

    }

    verifyPayment();

  }, []);

  async function upgradeToPremium() {

    try {

      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {

        alert("Please login first.");

        return;

      }

      const response = await fetch(
        "/api/paystack/initialize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        }
      );

      const data =
        await response.json();

      if (
        data?.data?.authorization_url
      ) {

        window.location.href =
          data.data.authorization_url;

      } else {

        alert(
          "Unable to start payment."
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Payment initialization failed."
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

        <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
          ZDS Secure AI Subscription Center
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">

            <h2 className="text-3xl font-bold">
              Premium Africa
            </h2>

            <p className="text-cyan-300 text-2xl mt-3">
              ₦5,000 / month
            </p>

            <p className="text-zinc-300 mt-4">
              Advanced AI threat intelligence,
              AI-SOC monitoring,
              wallet protection,
              fraud prevention,
              autonomous defense,
              recovery intelligence,
              and premium support.
            </p>

            <button
              onClick={upgradeToPremium}
              disabled={loading}
              className="w-full mt-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
            >
              {loading
                ? "Processing..."
                : "Upgrade to Premium"}
            </button>

          </div>

        </div>

        <div className="mt-10">

          <Link
            href="/profile"
            className="bg-zinc-900 px-5 py-3 rounded-2xl border border-cyan-500/20 hover:border-cyan-400"
          >
            Back to Profile
          </Link>

        </div>

      </main>

    </ProtectedRoute>

  );
}
