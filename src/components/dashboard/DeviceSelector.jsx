"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-auth";
import { useCurrentDevice } from "@/hooks/useCurrentDevice";

export default function DeviceSelector() {

  const { currentDevice, setCurrentDevice } = useCurrentDevice();

  const [devices, setDevices] = useState([]);

  useEffect(() => {

    async function loadDevices() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase

        .from("device_registry")

        .select("*")

        .eq("user_id", user.id)

        .order("last_seen", { ascending: false });

      setDevices(data || []);

      if (data?.length && !currentDevice) {

        setCurrentDevice(data[0]);

      }

    }

    loadDevices();

  }, []);

  return (

    <div className="flex items-center gap-3">

      <label className="text-slate-400 text-sm">

        Current Device

      </label>

      <select

        value={currentDevice?.device_id || ""}

        onChange={(e) => {

          const selected = devices.find(

            (d) => d.device_id === e.target.value

          );

          setCurrentDevice(selected);

        }}

        className="rounded-lg bg-slate-900 border border-cyan-500/30 px-3 py-2 text-white"

      >

        {devices.map((device) => (

          <option

            key={device.device_id}

            value={device.device_id}

          >

            {device.device_name} ({device.status})

          </option>

        ))}

      </select>

    </div>

  );

}
