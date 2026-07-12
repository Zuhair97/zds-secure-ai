
"use client";

import {
  Smartphone,
  BatteryFull,
  ShieldCheck,
  MapPin,
  Wifi,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardDeviceCard({ device }) {

  if (!device) {
    return (
      <Card className="p-6 rounded-2xl">
        <p>No device registered yet.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 rounded-2xl shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <Smartphone
              className="text-cyan-500"
              size={30}
            />

            <div>

              <h2 className="text-xl font-bold">
                {device.manufacturer} {device.model}
              </h2>

              <p className="text-slate-500">
                {device.platform} • {device.operating_system}
              </p>

            </div>

          </div>

        </div>

        <Badge
          className={
            device.status === "online"
              ? "bg-green-600"
              : "bg-red-600"
          }
        >
          {device.status}
        </Badge>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        <div>

          <div className="flex items-center gap-2">
            <BatteryFull size={18} />
            <span className="text-sm text-slate-500">
              Battery
            </span>
          </div>

          <p className="font-bold mt-2">
            {device.battery_level ?? "--"}%
          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">
            <Wifi size={18} />
            <span className="text-sm text-slate-500">
              Network
            </span>
          </div>

          <p className="font-bold mt-2">
            {device.network_type ?? "--"}
          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={18} />
            <span className="text-sm text-slate-500">
              Trust Score
            </span>
          </div>

          <p className="font-bold mt-2 text-green-600">
            {device.trust_score}
          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span className="text-sm text-slate-500">
              Location
            </span>
          </div>

          <p className="font-bold mt-2">
            {device.city}, {device.country}
          </p>

        </div>

      </div>

    </Card>
  );
}



