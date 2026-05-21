"use client";

const assets = [
  {
    title: "Blockchain Wallets",
    type: "Digital Asset Security",
    status: "Protected",
    risk: "Low",
  },

  {
    title: "Social Media Accounts",
    type: "Identity Protection",
    status: "Protected",
    risk: "Medium",
  },

  {
    title: "Bank Accounts",
    type: "Financial Security",
    status: "Protected",
    risk: "Low",
  },

  {
    title: "IoT Devices",
    type: "Smart Device Monitoring",
    status: "Monitoring",
    risk: "Medium",
  },
];

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Sentinel AI Assets
        </h1>

        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
          onClick={async () => {
            const { supabase } = await import(
              "@/lib/supabase"
            );

            await supabase.auth.signOut();

            window.location.href = "/auth";
          }}
        >
          Logout
        </button>
      </div>

      <p className="text-gray-400 mb-10">
        AI-powered monitoring and protection
        for your digital assets.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {assets.map((asset, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {asset.title}
            </h2>

            <p className="text-gray-400 mb-2">
              {asset.type}
            </p>

            <div className="flex justify-between mt-4">
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                {asset.status}
              </span>

              <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm">
                Risk: {asset.risk}
              </span>
            </div>
          </div>
        ))}

      </div>

    </main>
  );
}


