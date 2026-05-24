"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function DecentralizedIdentityPage() {

  const identities = [

    {
      identity:
        "Primary DID Profile",
      trust:
        "98%",
      status:
        "Verified",
    },

    {
      identity:
        "Wallet Identity Link",
      trust:
        "94%",
      status:
        "Protected",
    },

    {
      identity:
        "Cross-Platform Identity",
      trust:
        "91%",
      status:
        "Monitoring",
    },

    {
      identity:
        "Zero-Trust Authentication",
      trust:
        "100%",
      status:
        "Active",
    },

  ];

  function getStatusColor(status) {

    switch (status) {

      case "Verified":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      case "Monitoring":
        return "bg-yellow-500 text-black";

      default:
        return "bg-purple-500 text-white";

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Decentralized Identity
            </h1>

            <p className="text-zinc-400">
              AI-powered decentralized identity and zero-trust authentication engine.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            DID ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {identities.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.identity}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-400 mb-2">
                    AI Trust Verification
                  </p>

                  <p className="text-5xl font-bold">
                    {item.trust}
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
