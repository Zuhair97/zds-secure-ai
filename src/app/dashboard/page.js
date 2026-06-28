"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardDeviceGrid from "@/components/dashboard/DashboardDeviceGrid";
import DashboardSecurityHealth from "@/components/dashboard/DashboardSecurityHealth";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <DashboardSidebar />

      <main className="flex-1 flex flex-col">

        <DashboardHeader />

        <div className="p-8 space-y-8">

          <DashboardStats />

          <DashboardSecurityHealth />

          <DashboardDeviceGrid />

        </div>

      </main>

    </div>
  );
}


