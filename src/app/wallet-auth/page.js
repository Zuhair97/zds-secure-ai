"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function WalletAuthPage() {

  const [wallet, setWallet] =
    useState("");

  const [provider, setProvider] =
    useState("");

  const [connected, setConnected] =
    useState(false);

  async function connectMetaMask() {

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

        setProvider(
          "MetaMask"
        );

        setConnected(true);

      }

    } catch (error) {

      console.error(error);

    }

  }

  function connectWalletConnect() {

    alert(
      "WalletConnect integration coming soon."
    );

  }

  function connectTrustWallet() {

    alert(
      "Trust Wallet integration coming soon."
    );

  }

  const wallets = [

    {
      name: "MetaMask",
      action:
        connectMetaMask,
      color:
        "bg-orange-500",
    },

    {
      name: "WalletConnect",
      action:
        connectWalletConnect,
      color:
        "bg-blue-500",
    },

    {
      name: "Trust Wallet",
      action:
        connectTrustWallet,
      color:
        "bg-cyan-500",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Multi-Wallet Identity
        </h1>

        <p className="text-zinc-400 mb-10">
          Connect decentralized wallets to activate AI-powered identity protection.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-3xl">

          {!connected ? (

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Choose Wallet
              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                {wallets.map((item) => (

                  <button
                    key={item.name}
                    onClick={item.action}
                    className={`${item.color} hover:scale-105 transition rounded-2xl p-6 text-xl font-bold`}
                  >

                    {item.name}

                  </button>

                ))}

              </div>

            </div>

          ) : (

            <div>

              <h2 className="text-3xl font-bold mb-6 text-green-400">
                Wallet Connected
              </h2>

              <div className="bg-zinc-800 rounded-xl p-5 mb-5">

                <p className="text-zinc-400 mb-2">
                  Provider
                </p>

                <p className="text-2xl font-bold">
                  {provider}
                </p>

              </div>

              <div className="bg-zinc-800 rounded-xl p-5 mb-8">

                <p className="text-zinc-400 mb-2">
                  Wallet Address
                </p>

                <p className="break-all text-lg font-bold">
                  {wallet}
                </p>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-green-950 border border-green-700 rounded-xl p-5">

                  <h3 className="text-xl font-bold mb-2">
                    AI Trust Score
                  </h3>

                  <p className="text-5xl font-bold">
                    94%
                  </p>

                </div>

                <div className="bg-blue-950 border border-blue-700 rounded-xl p-5">

                  <h3 className="text-xl font-bold mb-2">
                    Security Status
                  </h3>

                  <p className="text-3xl font-bold">
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
