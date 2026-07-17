"use client";

import {
  Smartphone,
  BatteryFull,
  ShieldCheck,
  MapPin,
  Wifi,
  Cpu,
  HardDrive,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardDeviceCard({ device }) {
  return (
    <Card className="p-6 rounded-2xl shadow-sm border border-slate-800 bg-slate-900 text-white">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <Smartphone
              className="text-cyan-400"
              size={30}
            />

            <div>

              <h2 className="text-xl font-bold">

                {device.device_name ||
                  device.hostname ||
                  device.model ||
                  "Unknown Device"}

              </h2>

              <p className="text-slate-400">

                {device.operating_system || "Unknown OS"}{" "}
                {device.os_version || ""}

              </p>

              <p className="text-xs text-slate-500 mt-1">

                {device.manufacturer || ""}{" "}
                {device.platform || ""}

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
          {device.status || "offline"}
        </Badge>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        <div>

          <div className="flex items-center gap-2">

            <BatteryFull size={18} />

            <span className="text-sm text-slate-400">

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

            <span className="text-sm text-slate-400">

              Network

            </span>

          </div>

          <p className="font-bold mt-2">

            {device.network_type ||
              device.provider ||
              "Unknown"}

          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">

            <ShieldCheck size={18} />

            <span className="text-sm text-slate-400">

              Trust Score

            </span>

          </div>

          <p
            className={`font-bold mt-2 ${
              device.trust_score >= 90
                ? "text-green-400"
                : device.trust_score >= 60
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {device.trust_score ?? "--"}
          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">

            <MapPin size={18} />

            <span className="text-sm text-slate-400">

              Location

            </span>

          </div>

          <p className="font-bold mt-2">

            {device.city || "Unknown"},{" "}
            {device.country || ""}

          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 border-t border-slate-800 pt-6">

        <div>

          <div className="flex items-center gap-2">

            <Cpu size={18} />

            <span className="text-sm text-slate-400">

              CPU

            </span>

          </div>

          <p className="font-bold mt-2">

            {device.cpu_percent ?? "--"}%

          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">

            <HardDrive size={18} />

            <span className="text-sm text-slate-400">

              Storage

            </span>

          </div>

          <p className="font-bold mt-2">

            {device.storage_free
              ? `${Math.round(
                  device.storage_free / 1024 / 1024 / 1024
                )} GB Free`
              : "--"}

          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">

            <ShieldCheck size={18} />

            <span className="text-sm text-slate-400">

              Last Seen

            </span>

          </div>

          <p className="font-bold mt-2">

            {device.last_seen
              ? new Date(device.last_seen).toLocaleString()
              : "--"}

          </p>

        </div>

      </div>

    </Card>
  );
}


