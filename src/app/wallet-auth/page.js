"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function WalletAuthPage() {

  const [wallet, setWallet] =
    useState("");

  const [connected, setConnected] =
    useState(false);

  async function connectWallet() {

    if (!window.ethereum) {
      alert(
        "MetaMask not detected."
      );
      return;
    }

    try {

      const accounts =
        await window.ethereum.request({
          method:
            "eth_requestAccounts",
        });

      if (accounts.length > 0) {

        setWallet(accounts[0]);
        setConnected(true);

      }

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Decentralized Wallet Identity
        </h1>

        <p className="text-zinc-400 mb-10">
          Connect your wallet to build decentralized identity and AI trust intelligence.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-2xl">

          {!connected ? (

            <div>

              <h2 className="text-3xl font-bold mb-5">
                Connect Wallet
              </h2>

              <p className="text-zinc-400 mb-8 text-lg">
                Securely connect your crypto wallet to activate decentralized identity protection.
              </p>

              <button
                onClick={connectWallet}
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl text-xl font-bold"
              >

                Connect MetaMask

              </button>

            </div>

          ) : (

            <div>

              <h2 className="text-3xl font-bold mb-5 text-green-400">
                Wallet Connected
              </h2>

              <div className="bg-zinc-800 rounded-xl p-5 mb-6">

                <p className="text-zinc-400 mb-2">
                  Wallet Address
                </p>

                <p className="break-all text-lg font-bold">
                  {wallet}
                </p>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="bg-green-950 border border-green-700 rounded-xl p-5">

                  <h3 className="text-xl font-bold mb-2">
                    Trust Score
                  </h3>

                  <p className="text-4xl font-bold">
                    92%
                  </p>

                </div>

                <div className="bg-blue-950 border border-blue-700 rounded-xl p-5">

                  <h3 className="text-xl font-bold mb-2">
                    AI Status
                  </h3>

                  <p className="text-2xl font-bold">
                    Protected
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
