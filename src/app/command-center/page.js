"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CommandCenterPage() {

const modules = [
{ name: "Profile", href: "/profile" },
{ name: "Notifications", href: "/notifications" },
{ name: "Threat Intelligence", href: "/threat-intelligence" },
{ name: "Device Recovery", href: "/device-recovery" },
{ name: "Blockchain Intelligence", href: "/blockchain-intelligence" },
{ name: "Trust Network", href: "/trust-network" },
{ name: "Cyber Academy", href: "/cyber-academy" },
{ name: "Billing", href: "/subscriptions" },
];

const systems = [
{
name: "AI Threat Intelligence",
status: "ACTIVE",
},
{
name: "Fraud Protection",
status: "SECURED",
},
{
name: "Wallet Defense",
status: "MONITORING",
},
{
name: "Trading Guardian",
status: "ACTIVE",
},
{
name: "Identity Protection",
status: "SECURED",
},
{
name: "Autonomous Defense",
status: "READY",
},
];

function getColor(status) {
switch (status) {
case "ACTIVE":
return "bg-green-500 text-black";

```
  case "SECURED":
    return "bg-cyan-500 text-black";

  case "MONITORING":
    return "bg-yellow-500 text-black";

  default:
    return "bg-red-500 text-white";
}
```

}

return ( <ProtectedRoute> <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white p-6">

```
    <div className="mb-10">

      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-slate-300 text-transparent bg-clip-text">
        AI Command Center
      </h1>

      <p className="text-zinc-300 text-lg">
        Unified global AI cybersecurity operations and autonomous defense hub.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

      {modules.map((module) => (
        <Link
          key={module.href}
          href={module.href}
          className="bg-zinc-900 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition"
        >
          <h3 className="font-bold text-lg">
            {module.name}
          </h3>
        </Link>
      ))}

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {systems.map((item, index) => (

        <div
          key={index}
          className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
        >

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <span className={`px-4 py-1 rounded-full text-sm font-bold ${getColor(item.status)}`}>
              {item.status}
            </span>

          </div>

          <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5">

            <p className="text-zinc-300 text-lg">
              AI operational monitoring and autonomous protection systems active.
            </p>

          </div>

        </div>

      ))}

    </div>

  </main>
</ProtectedRoute>
```

);
}
