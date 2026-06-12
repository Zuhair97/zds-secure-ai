"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SubscriptionsPage() {

const [loading, setLoading] = useState(false);

async function upgradePlan(plan) {


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
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        plan,
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

const plans = [


{
  plan: "Free",
  price: "₦0",
  description:
    "Basic protection, alerts and account security.",
},

{
  plan: "Personal",
  price: "₦2,500 / Year",
  description:
    "Personal cybersecurity protection and monitoring.",
  paid: true,
},

{
  plan: "Premium",
  price: "₦5,000 / Year",
  description:
    "AI threat intelligence, fraud protection, wallet defense and autonomous monitoring.",
  paid: true,
},

{
  plan: "Professional",
  price: "₦10,000 / Year",
  description:
    "Advanced cybersecurity tools for professionals and researchers.",
  paid: true,
},

{
  plan: "Web3 Security",
  price: "₦10,000 / Year",
  description:
    "Blockchain intelligence, wallet monitoring and crypto protection.",
  paid: true,
},

{
  plan: "Business",
  price: "₦25,000 / Year",
  description:
    "Multi-user cybersecurity infrastructure for startups and businesses.",
  paid: true,
},

{
  plan: "Enterprise",
  price: "Custom Pricing",
  description:
    "Government, military, banking and enterprise-grade deployment.",
},


];

return (


<ProtectedRoute>

  <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white p-6">

    <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
      ZDS Secure AI Subscription Center
    </h1>

    <div className="grid lg:grid-cols-2 gap-6">

      {plans.map((item, index) => (

        <div
          key={index}
          className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
        >

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-3xl font-bold">
                {item.plan}
              </h2>

              <p className="text-cyan-300 text-2xl mt-2 font-bold">
                {item.price}
              </p>

            </div>

          </div>

          <p className="text-zinc-300 text-lg mb-5">
            {item.description}
          </p>

          {item.paid && (

            <button
              onClick={() =>
                upgradePlan(item.plan)
              }
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400"
            >

              {loading
                ? "Processing..."
                : `Choose ${item.plan}`}

            </button>

          )}

        </div>

      ))}

    </div>

    <div className="mt-10">

      <Link
        href="/profile"
        className="bg-zinc-900 px-5 py-3 rounded-2xl border border-cyan-500/20"
      >
        Back to Profile
      </Link>

    </div>

  </main>

</ProtectedRoute>


);

}

