"use client";

import Link from "next/link";

export default function Sidebar() {
const links = [
{ name: "Dashboard", href: "/" },
{ name: "Command Center", href: "/command-center" },
{ name: "Threat Intelligence", href: "/threat-map" },
{ name: "Device Recovery", href: "/device-recovery" },
{ name: "Blockchain Intelligence", href: "/blockchain-intelligence" },
{ name: "Trust Network", href: "/trust-network" },
{ name: "AI-SOC", href: "/ai-soc" },
{ name: "Cyber Academy", href: "/cyber-academy" },
{ name: "Billing", href: "/billing" },
{ name: "Settings", href: "/settings" },
{ name: "Profile", href: "/profile" },
{ name: "Notifications", href: "/notifications" },
];

return ( <aside className="w-64 min-h-screen bg-black border-r border-zinc-800 p-4"> <h2 className="text-2xl font-bold mb-6 text-cyan-400">
ZDS Secure AI </h2>

```
  <nav className="space-y-3">
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="block p-3 rounded-xl hover:bg-zinc-900 transition"
      >
        {link.name}
      </Link>
    ))}
  </nav>
</aside>
```

);
}

