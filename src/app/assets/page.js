import Navbar from "@/components/Navbar";
import AssetCard from "@/components/AssetCard";

export default function AssetsPage() {

  const assets = [
    {
      title: "Blockchain Wallets",
      type: "Financial Assets",
      status: "Protected",
      risk: "Low",
    },

    {
      title: "Email Accounts",
      type: "Identity Assets",
      status: "Monitoring Active",
      risk: "Medium",
    },

    {
      title: "Social Media Accounts",
      type: "Communication Assets",
      status: "Protected",
      risk: "Medium",
    },

    {
      title: "Cloud Infrastructure",
      type: "Infrastructure Assets",
      status: "Scanning",
      risk: "Low",
    },

    {
      title: "Mobile Devices",
      type: "Device Assets",
      status: "Secured",
      risk: "Low",
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
          <AssetCard
            key={index}
            title={asset.title}
            type={asset.type}
            status={asset.status}
            risk={asset.risk}
          />
        ))}

      </div>

    </main>
  );
}
