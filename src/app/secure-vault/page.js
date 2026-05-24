"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecureVaultPage() {

  const [vaultItems, setVaultItems] =
    useState([]);

  function addVaultItem() {

    const item = {

      type:
        "Encrypted Recovery Backup",

      status:
        "Protected",

      timestamp:
        new Date().toLocaleString(),

    };

    setVaultItems([
      ...vaultItems,
      item,
    ]);

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Secure AI Vault
            </h1>

            <p className="text-zinc-400">
              Encrypted digital backup and recovery intelligence vault.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            VAULT ENCRYPTION ACTIVE

          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">

          <h2 className="text-4xl font-bold mb-5">
            Emergency Backup Protection
          </h2>

          <p className="text-zinc-400 text-xl mb-8">
            Store encrypted recovery phrases, backup keys and identity recovery assets securely.
          </p>

          <button
            onClick={addVaultItem}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black text-2xl font-bold px-10 py-5 rounded-2xl"
          >

            CREATE ENCRYPTED BACKUP

          </button>

        </div>

        <div className="grid gap-6">

          {vaultItems.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.type}
                  </h2>

                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-400 mb-2">
                    Backup Timestamp
                  </p>

                  <p className="text-2xl font-bold">
                    {item.timestamp}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
