"use client";

import AuthGuard from "@/components/auth/AuthGuard";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardSecurityHealth from "@/components/dashboard/DashboardSecurityHealth";
import ThreatFeed from "@/components/dashboard/ThreatFeed";
import LiveCyberMap from "@/components/dashboard/LiveCyberMap";
import DashboardDeviceGrid from "@/components/dashboard/DashboardDeviceGrid";
import RemoteControlPanel from "@/components/dashboard/RemoteControlPanel";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-slate-950">

        <DashboardSidebar />

        <main className="flex-1 flex flex-col">

          <DashboardHeader />

          <div className="p-8 space-y-8">

            <DashboardStats />

            <DashboardSecurityHealth />

            <RemoteControlPanel />

            <ThreatFeed />

            <LiveCyberMap />

            <DashboardDeviceGrid />

          </div>

        </main>

      </div>
    </AuthGuard>
  );
}



