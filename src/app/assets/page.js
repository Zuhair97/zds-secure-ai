import Navbar from "@/components/Navbar";

export default function AssetsPage() {

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
      status: "Monitoring",
      risk: "Medium",
    },

    {
      title: "Emails & Cloud Accounts",
      type: "Account Security",
      status: "Secured",
      risk: "Low",
    },

    {
      title: "Smartphones & Tablets",
      type: "Mobile Endpoint Security",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "Android Devices",
      type: "Android Security",
      status: "Monitoring Active",
      risk: "Medium",
    },

    {
      title: "iPhones & iPads",
      type: "Apple Mobile Security",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "PCs & Laptops",
      type: "Endpoint Security",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "CCTV & Surveillance Systems",
      type: "IoT Security",
      status: "Monitoring Active",
      risk: "Medium",
    },

    {
      title: "Smart Routers & Networks",
      type: "Network Infrastructure",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "POS Machines & Smart Payments",
      type: "Financial IoT Systems",
      status: "Secured",
      risk: "Medium",
    },

    {
      title: "Smart Cars & GPS Trackers",
      type: "Connected Vehicle Systems",
      status: "Monitoring Active",
      risk: "Medium",
    },

    {
      title: "Industrial Sensors & Smart Meters",
      type: "Industrial IoT",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "Drones & Autonomous Devices",
      type: "Autonomous IoT Systems",
      status: "Active",
      risk: "Medium",
    },

    {
      title: "Websites & Domains",
      type: "Web Infrastructure",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "AI Agents & Bots",
      type: "Autonomous Systems",
      status: "Active",
      risk: "Medium",
    },

  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Digital Asset Intelligence
      </h1>

      <div className="grid gap-6">

        {assets.map((asset, index) => (
          <div
            key={index}
            className="border border-cyan-500 bg-zinc-900 rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold text-cyan-400 mb-2">
              {asset.title}
            </h2>

            <p className="text-gray-400 mb-2">
              Type: {asset.type}
            </p>

            <p className="text-green-400 mb-2">
              Status: {asset.status}
            </p>

            <p className="text-yellow-400">
              Risk Level: {asset.risk}
            </p>

          </div>
        ))}

      </div>
<button
  className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
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
    </main>
  );
}
