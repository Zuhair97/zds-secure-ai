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

export default function DashboardDeviceCard() {
  return (
    <Card className="p-6 rounded-2xl shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <Smartphone className="text-blue-600" size={30} />

            <div>

              <h2 className="text-xl font-bold">

                Samsung Galaxy A15

              </h2>

              <p className="text-slate-500">

                Android 15

              </p>

            </div>

          </div>

        </div>

        <Badge className="bg-green-600">

          Online

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

            92%

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

            Connected

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

            100

          </p>

        </div>

        <div>

          <div className="flex items-center gap-2">

            <MapPin size={18} />

            <span className="text-sm text-slate-500">

              Last Location

            </span>

          </div>

          <p className="font-bold mt-2">

            Kano, Nigeria

          </p>

        </div>

      </div>

    </Card>
  );
}
