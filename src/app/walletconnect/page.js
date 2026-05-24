"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function WalletConnectPage() {

  const [sessions, setSessions] =
    useState([]);

  function connectWallet(wallet) {

    const newSession = {

      wallet,

      chain:
        ["Ethereum", "BNB Chain", "Polygon"][
          Math.floor(Math.random() * 3)
        ],

      sessionId:
        Math.random()
          .toString(36)
          .substring(2, 10),

      trustScore:
        Math.floor(
          Math.random() * 25
        ) + 75,

      status:
        "Connected",

    };

    setSessions([
      ...sessions,
      newSession,
    ]);

  }

  const wallets = [

    "MetaMask",

    "Trust Wallet",

    "OKX Wallet",

    "SafePal",

    "Rainbow",

    "TokenPocket",

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              WalletConnect Infrastructure
            </h1>

            <p className="text-zinc-400">
              Universal AI-powered Web3 wallet connectivity and session intelligence.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            WALLETCONNECT ACTIVE

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">

          {wallets.map(
            (wallet, index) => (

              <button
                key={index}
                onClick={() =>
                  connectWallet(wallet)
                }
                className="bg-zinc-900 hover:bg-zinc-800 transition border border-zinc-800 rounded-2xl p-6 text-left"
              >

                <h2 className="text-2xl font-bold mb-3">
                  {wallet}
                </h2>

                <p className="text-zinc-400">
                  Connect wallet using WalletConnect infrastructure.
                </p>

              </button>

            )
          )}

        </div>

        <div className="grid gap-6">

          {sessions.map(
            (session, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {session.wallet}
                  </h2>

                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                    {session.status}

                  </span>

                </div>

                <div className="grid md:grid-cols-3 gap-5">

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      Connected Chain
                    </p>

                    <p className="text-2xl font-bold">
                      {session.chain}
                    </p>

                  </div>

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      Session ID
                    </p>

                    <p className="text-xl font-bold break-all">
                      {session.sessionId}
                    </p>

                  </div>

                  <div className="bg-black border border-zinc-800 rounded-xl p-5">

                    <p className="text-zinc-400 mb-2">
                      AI Trust Score
                    </p>

                    <p className="text-4xl font-bold">
                      {session.trustScore}%
                    </p>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
