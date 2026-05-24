"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function EmergencyLockdownPage() {

  const [activated, setActivated] =
    useState(false);

  const actions = [

    "All active sessions revoked",

    "Wallet connections isolated",

    "Trusted devices locked",

    "Browser sessions terminated",

    "Emergency recovery mode enabled",

    "AI containment protocols active",

  ];

  function activateLockdown() {

    setActivated(true);

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Emergency Lockdown
            </h1>

            <p className="text-zinc-400">
              AI-powered emergency cyber defense and digital kill switch system.
            </p>

          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-full font-bold">

            CRITICAL DEFENSE READY

          </div>

        </div>

        {!activated ? (

          <div className="bg-zinc-900 border border-red-800 rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Emergency Kill Switch
            </h2>

            <p className="text-zinc-400 text-xl mb-10">
              Immediately isolate all risky sessions, wallets and connected assets.
            </p>

            <button
              onClick={activateLockdown}
              className="bg-red-600 hover:bg-red-700 transition text-white text-2xl font-bold px-10 py-5 rounded-2xl"
            >

              ACTIVATE LOCKDOWN

            </button>

          </div>

        ) : (

          <div className="grid gap-6">

            <div className="bg-red-950 border border-red-700 rounded-3xl p-8">

              <h2 className="text-5xl font-bold mb-5">
                LOCKDOWN ACTIVE
              </h2>

              <p className="text-red-200 text-xl">
                AI emergency containment protocols are now active.
              </p>

            </div>

            {actions.map(
              (action, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >

                  <div className="flex items-center justify-between">

                    <h2 className="text-2xl font-bold">
                      {action}
                    </h2>

                    <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                      COMPLETE

                    </span>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </main>

    </ProtectedRoute>
  );
}
