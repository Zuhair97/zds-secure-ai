"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Web3IdentityPage() {

  const [wallets, setWallets] =
    useState([]);

  function connectWallet(name) {

    const newWallet = {

      name,

      address:
        "0xA84f...92B7",

      trustScore:
        Math.floor(
          Math.random() * 30
        ) + 70,

      status:
        "Connected",

    };

    setWallets([
      ...wallets,
      newWallet,
    ]);

  }

  const supportedWallets = [

    "MetaMask",

    "Trust Wallet",

    "Coinbase Wallet",

    "Phantom",

    "Rabby Wallet",

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Web3 Identity Layer
            </h1>

            <p className="text-zinc-400">
              Decentralized identity and AI-powered wallet security intelligence.
            </p>

          </div>

          <div className="bg-purple-500 text-white px-5 py-2 rounded-full font-bold">

            WEB3 ACTIVE

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">

          {supportedWallets.map(
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
                  Connect decentralized wallet identity.
                </p>

              </button>

            )
          )}

        </div>

        <div className="grid gap-6">

          {wallets.map(
            (wallet, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {wallet.name}
                  </h2>

                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                    {wallet.status}

                  </span>

                </div>

                <p className="text-zinc-300 break-all mb-5">
                  {wallet.address}
                </p>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-400 mb-2">
                    AI Trust Score
                  </p>

                  <p className="text-5xl font-bold">
                    {wallet.trustScore}%
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
