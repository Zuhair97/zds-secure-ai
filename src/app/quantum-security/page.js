"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function QuantumSecurityPage() {

  const protocols = [

    {
      protocol:
        "Post-Quantum Encryption",
      status:
        "Active",
      description:
        "Quantum-resistant encryption integrity verified successfully.",
    },

    {
      protocol:
        "Quantum-Safe Wallet Security",
      status:
        "Protected",
      description:
        "AI monitoring future cryptographic exposure risks.",
    },

    {
      protocol:
        "Decentralized Identity Encryption",
      status:
        "Secured",
      description:
        "Zero-trust DID cryptographic protection enabled.",
    },

    {
      protocol:
        "Future Threat Analysis",
      status:
        "Scanning",
      description:
        "AI analyzing quantum-era cybersecurity threat models.",
    },

  ];

  function getColor(status) {

    switch (status) {

      case "Active":
        return "bg-green-500 text-black";

      case "Protected":
        return "bg-cyan-500 text-black";

      case "Scanning":
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
              Quantum Security
            </h1>

            <p className="text-zinc-400">
              AI-powered post-quantum cybersecurity and future-proof encryption defense.
            </p>

          </div>

          <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold">

            QUANTUM DEFENSE ACTIVE

          </div>

        </div>

        <div className="grid gap-6">

          {protocols.map(
            (item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-3xl font-bold">
                    {item.protocol}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>

                    {item.status}

                  </span>

                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-5">

                  <p className="text-zinc-300 text-lg leading-8">
                    {item.description}
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
