
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase-auth";

import {
  LayoutDashboard,
  Smartphone,
  Shield,
  MapPinned,
  Bot,
  Bell,
  Settings,
  User,
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
    title: "Threat Intelligence",
    href: "/threat-intelligence",
    icon: Shield,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {

  const pathname = usePathname();
  const router = useRouter();

  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {

    setLoggingOut(true);

    await supabase.auth.signOut();

    router.replace("/login");

  }

  return (

    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 text-white flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <div className="flex justify-center mb-4">

          <Image
            src="/zds.png"
            alt="ZDS Secure AI"
            width={80}
            height={80}
            priority
          />

        </div>

        <h1 className="text-xl font-bold text-center text-blue-400">
          ZDS Secure AI
        </h1>

        <p className="text-slate-400 text-xs text-center mt-2">
          AI Cyber Defense Platform
        </p>

      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>

          );

        })}

      </nav>

      <div className="border-t border-slate-800 p-4">

        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 py-3 transition disabled:opacity-60"
        >

          <LogOut size={18} />

          {loggingOut ? "Signing Out..." : "Logout"}

        </button>

      </div>

    </aside>

  );

}

