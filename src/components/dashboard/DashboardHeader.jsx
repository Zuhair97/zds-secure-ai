"use client";
import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function DashboardHeader() {
  return (
const [search, setSearch] = useState("");
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl px-8 py-5 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Command Center
        </h1>

        <p className="text-slate-400 mt-1">
          Monitor your devices in real time.
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-500"
          />
{search && (

<div className="absolute top-12 left-0 w-72 rounded-xl bg-slate-900 border border-cyan-500/30 shadow-xl z-50">

<div className="p-3 text-cyan-400 text-sm border-b border-slate-700">

Search Results

</div>

<div className="p-3 hover:bg-slate-800 cursor-pointer">

📱 Device: TECNO pop 8

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
            <Input
  placeholder="Search devices, alerts, threats..."
  className="pl-10 w-72"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

        </div>

        <button className="relative p-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition">

          <Bell size={20} className="text-white" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>

        </button>

        <Avatar className="w-11 h-11 border border-blue-500">

          <AvatarFallback className="bg-blue-600 text-white font-bold">
            SA
          </AvatarFallback>

        </Avatar>

      </div>

    </header>
  );
}
