
"use client";

import { useEffect, useState } from "react";
import DashboardDeviceCard from "./DashboardDeviceCard";
import { supabase } from "@/lib/supabase";

export default function DashboardDeviceGrid() {

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    loadDevices();
  }, []);

  async function loadDevices() {

    const { data, error } = await supabase
      .from("devices")
      .select("*")
      .order("last_seen", { ascending: false });

    if (!error) {
      setDevices(data);
    }

  }

  return (

    <div className="space-y-6">

      {devices.length === 0 ? (

        <div className="rounded-xl bg-slate-900 text-white p-10 text-center">
          No registered devices.
        </div>

      ) : (

        devices.map((device) => (

          <DashboardDeviceCard
            key={device.device_id}
            device={device}
          />

        ))

      )}

    </div>

  );

}

