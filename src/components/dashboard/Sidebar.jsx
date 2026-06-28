"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Smartphone,
  Shield,
  MapPinned,
  Bot,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Devices",
    href: "/trusted-devices",
    icon: Smartphone,
  },
  {
    title: "Recovery",
    href: "/device-recovery",
    icon: MapPinned,
  },
  {
    title: "AI Center",
    href: "/ai-soc",
    icon: Bot,
  },
  {
    title: "Threats",
    href: "/threat-intelligence",
    icon: Shield,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-950 text-white border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold">

          ZDS Secure AI

        </h1>

        <p className="text-slate-400 text-sm mt-1">

          Intelligent Cyber Defense

        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-800 transition-all"
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </Link>

          );

        })}

      </nav>

      <div className="border-t border-slate-800 p-4">

        <button className="flex items-center gap-3 w-full rounded-xl bg-red-600 hover:bg-red-700 px-4 py-3 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}
