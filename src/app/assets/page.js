
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
      title: "Endpoint & IoT Devices",
      type: "Endpoint & IoT Security",
      status: "Secured",
      risk: "Low",
    },

    {
      title: "PCs & Laptops",
      type: "Endpoint Security",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "Smart IoT Infrastructure",
      type: "RWA & IoT Assets",
      status: "Monitoring Active",
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

    </main>
  );
}

