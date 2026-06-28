"use client";

import DashboardDeviceCard from "./DashboardDeviceCard";

export default function DashboardDeviceGrid() {
  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Protected Devices

        </h2>

        <span className="text-slate-500">

          1 Device

        </span>

      </div>

      <div className="grid gap-6">

        <DashboardDeviceCard />

      </div>

    </section>
  );
}
