"use client";

import DashboardDeviceCard from "./DashboardDeviceCard";
import useDevices from "@/hooks/useDevices";
import { useCurrentDevice } from "@/hooks/useCurrentDevice";

export default function DashboardDeviceGrid() {

  const { devices, loading } = useDevices();

  const {
    currentDevice,
    setCurrentDevice,
  } = useCurrentDevice();


  if (loading) {
    return (
      <div className="text-slate-400">
        Loading devices...
      </div>
    );
  }


  if (!devices.length) {
    return (
      <div className="rounded-2xl border border-slate-800 p-8 text-center text-slate-400">
        No registered devices found.
      </div>
    );
  }


  const device =
    currentDevice || devices[0];


  if (!currentDevice && device) {
    setCurrentDevice(device);
  }


  return (
    <div className="grid gap-6">


      <DashboardDeviceCard
        device={device}
      />


    </div>
  );
}
