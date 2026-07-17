"use client";
import DeviceSelector from "./DeviceSelector";
import { useState } from "react";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function DashboardHeader() {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "AI blocked a phishing attack",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Device location updated",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "Security scan completed",
      time: "25 min ago",
    },
  ];

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl px-8 py-5 flex items-center justify-between relative">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Command Center
        </h1>

        <p className="text-slate-400 mt-1">
          Monitor your devices in real time.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <DeviceSelector />
        {/* SEARCH */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-500"
          />

          <Input
            placeholder="Search devices, alerts, threats..."
            className="pl-10 w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <div className="absolute top-12 left-0 w-72 rounded-xl bg-slate-900 border border-cyan-500/30 shadow-xl z-50">

              <div className="p-3 text-cyan-400 text-sm border-b border-slate-700">
                Search Results
              </div>

              <div className="p-3 hover:bg-slate-800 cursor-pointer">
                📱 Devices
              </div>

              <div className="p-3 hover:bg-slate-800 cursor-pointer">
                🛡 Threat Intelligence
              </div>

              <div className="p-3 hover:bg-slate-800 cursor-pointer">
                🤖 AI Center
              </div>

              <div className="p-3 hover:bg-slate-800 cursor-pointer">
                ⚠ Security Reports
              </div>

            </div>
          )}

        </div>

        {/* BELL */}

        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative rounded-xl border border-slate-700 p-3 hover:bg-slate-800 transition"
        >

          <Bell size={20} className="text-white" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>

        </button>

        {showNotifications && (

          <div className="absolute right-24 top-20 w-80 rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-2xl z-50">

            <div className="p-4 border-b border-slate-700">

              <h3 className="font-bold text-cyan-400">
                Notifications
              </h3>

            </div>

            {notifications.map((item) => (

              <div
                key={item.id}
                className="p-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer"
              >

                <p className="text-white text-sm">
                  {item.title}
                </p>

                <p className="text-slate-400 text-xs mt-1">
                  {item.time}
                </p>

              </div>

            ))}

            <Link
              href="/notifications"
              className="block text-center text-cyan-400 p-3 hover:bg-slate-800"
            >
              View all notifications
            </Link>

          </div>

        )}

        {/* AVATAR */}

        <Avatar className="w-11 h-11 border border-cyan-500">

          <AvatarFallback className="bg-cyan-600 text-white font-bold">
            SA
          </AvatarFallback>

        </Avatar>

      </div>

    </header>
  );
}
