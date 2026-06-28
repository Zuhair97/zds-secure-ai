"use client";

import {
  ShieldCheck,
  Smartphone,
  AlertTriangle,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    title: "Trust Score",
    value: "100",
    subtitle: "Excellent",
    color: "text-green-600",
    icon: ShieldCheck,
  },
  {
    title: "Protected Devices",
    value: "1",
    subtitle: "Online",
    color: "text-blue-600",
    icon: Smartphone,
  },
  {
    title: "Threat Alerts",
    value: "0",
    subtitle: "Safe",
    color: "text-red-600",
    icon: AlertTriangle,
  },
  {
    title: "Recovery Status",
    value: "Ready",
    subtitle: "GPS Active",
    color: "text-purple-600",
    icon: MapPinned,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500 text-sm">

                  {item.title}

                </p>

                <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>

                  {item.value}

                </h2>

                <p className="text-slate-400 mt-2 text-sm">

                  {item.subtitle}

                </p>

              </div>

              <div className="rounded-xl bg-slate-100 p-4">

                <Icon
                  size={28}
                  className={item.color}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}
