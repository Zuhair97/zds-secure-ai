"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SuperAppPage() {

  const modules = [

    {
      name: "Command Center",
      path: "/command-center",
    },

    {
      name: "Threat Network",
      path: "/threat-network",
    },

    {
      name: "Wallet Security",
      path: "/wallet-security",
    },

    {
      name: "Device Intelligence",
      path: "/device-intelligence",
    },

    {
      name: "Recovery Intelligence",
      path: "/recovery-intelligence",
    },

    {
      name: "Emergency Lockdown",
      path: "/emergency-lockdown",
    },

    {
      name: "Secure Vault",
      path: "/secure-vault",
    },

    {
      name: "Guardian Network",
      path: "/guardian-network",
    },

    {
      name: "Cyber Simulation",
      path: "/cyber-simulation",
    },

    {
      name: "Quantum Security",
      path: "/quantum-security",
    },

    {
      name: "Self-Evolving AI",
      path: "/self-evolving-ai",
    },

    {
      name: "Decentralized Identity",
      path: "/decentralized-identity",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="mb-12">

          <h1 className="text-6xl font-bold mb-4">
            ZDS Secure AI Super App
          </h1>

          <p className="text-zinc-400 text-xl">
            Unified AI-powered cybersecurity ecosystem and digital defense operating system.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {modules.map(
            (module, index) => (

              <Link
                href={module.path}
                key={index}
                className="bg-zinc-900 hover:bg-zinc-800 transition border border-zinc-800 rounded-3xl p-8"
              >

                <h2 className="text-3xl font-bold mb-4">
                  {module.name}
                </h2>

                <p className="text-zinc-400">
                  Open AI security module
                </p>

              </Link>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
