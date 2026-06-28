"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function DashboardHeader() {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back to ZDS Secure AI
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <Input
            placeholder="Search..."
            className="pl-10 w-72"
          />

        </div>

        <button className="relative rounded-xl border border-slate-200 p-3 hover:bg-slate-100 transition">

          <Bell size={20} />

          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"></span>

        </button>

        <Avatar className="w-11 h-11">

          <AvatarFallback className="bg-blue-600 text-white">

            SA

          </AvatarFallback>

        </Avatar>

      </div>

    </header>
  );
}
