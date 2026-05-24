"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CommandCenterPage() {

  const modules = [

    {
      title:
        "Security Operations Center",
      path: "/soc",
      status: "Active",
    },

    {
      title:
        "Threat Intelligence",
      path:
        "/threat-intelligence",
      status: "Live",
    },

    {
      title:
        "Geo-Risk Intelligence",
      path: "/geo-risk",
      status: "Monitoring",
    },

    {
      title:
        "Trusted Devices",
      path:
        "/trusted-devices",
      status: "Protected",
    },

    {
      title:
        "Session Intelligence",
      path:
        "/session-intelligence",
      status: "Active",
    },

    {
      title:
        "AI Alert Center",
      path: "/ai-alerts",
      status: "Live",
    },

    {
      title:
        "Emergency Lockdown",
      path:
        "/emergency-lockdown",
      status: "Ready",
    },

    {
      title:
        "Predictive Analytics",
      path:
        "/predictive-analytics",
      status: "Forecasting",
    },

    {
      title:
        "Autonomous AI Defense",
      path: "/ai-defense",
      status: "AI Active",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-12">

          <div>

            <h1 className="text-6xl font-bold mb-4">
              ZDS AI Command Center
            </h1>

            <p className="text-zinc-400 text-lg">
              Unified AI-powered cybersecurity ecosystem and command platform.
            </p>

          </div>

          <div className="bg-green-500 text-black px-6 py-3 rounded-full font-bold text-lg">

            ALL SYSTEMS ACTIVE

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {modules.map(
            (module, index) => (

              <Link
                key={index}
                href={module.path}
              >

                <div className="bg-zinc-900 hover:bg-zinc-800 transition border border-zinc-800 rounded-2xl p-6 cursor-pointer h-full">

                  <div className="flex items-center justify-between mb-6">

                    <h2 className="text-2xl font-bold">
                      {module.title}
                    </h2>

                    <span className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm font-bold">

                      {module.status}

                    </span>

                  </div>

                  <p className="text-zinc-400 leading-7">
                    AI-powered cybersecurity intelligence, monitoring, and autonomous defense systems.
                  </p>

                </div>

              </Link>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
