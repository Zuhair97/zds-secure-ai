"use client";

import { useCurrentDevice } from "@/hooks/useCurrentDevice";
import {
  Lock,
  Bell,
  MapPinned,
  Shield,
  Power,
  Trash2,
} from "lucide-react";

export default function RemoteControlPanel() {

  const { currentDevice } = useCurrentDevice();

  const sendCommand = async (command) => {

    if (!currentDevice) {

      alert("Please select a device first.");

      return;

    }

    try {

      const response = await fetch("/api/device-agent/send-command", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          device_id: currentDevice.device_id,

          command,

        }),

      });

      const result = await response.json();

      if (result.success) {

        alert(`${command} queued successfully.`);

      } else {

        alert(result.error || result.message || "Failed to queue command.");

      }

    } catch (err) {

      console.error(err);

      alert("Unable to contact Remote Engine.");

    }

  };

  const buttons = [

    {
      title: "Lock Device",
      icon: <Lock size={18} />,
      cmd: "LOCK_DEVICE",
    },

    {
      title: "Ring Alarm",
      icon: <Bell size={18} />,
      cmd: "RING_ALARM",
    },

    {
      title: "Live Location",
      icon: <MapPinned size={18} />,
      cmd: "FORCE_LOCATION",
    },

    {
      title: "Kill Sessions",
      icon: <Shield size={18} />,
      cmd: "KILL_SESSIONS",
    },

    {
      title: "Disable Device",
      icon: <Power size={18} />,
      cmd: "DISABLE_DEVICE",
    },

    {
      title: "Secure Wipe",
      icon: <Trash2 size={18} />,
      cmd: "SECURE_WIPE",
    },

  ];

  return (

    <div className="rounded-2xl border border-cyan-500/30 bg-slate-900 p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-bold text-cyan-400">

            Remote Control Console

          </h2>

          <p className="text-sm text-slate-400 mt-1">

            {currentDevice
              ? `Selected Device: ${currentDevice.device_name || currentDevice.hostname || currentDevice.device_id}`
              : "No device selected"}

          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-4">

        {buttons.map((item) => (

          <button
            key={item.cmd}
            onClick={() => sendCommand(item.cmd)}
            disabled={!currentDevice}
            className={`rounded-xl border p-4 transition

            ${
              currentDevice
                ? "border-slate-700 bg-slate-800 hover:border-cyan-400 hover:bg-slate-700"
                : "border-slate-800 bg-slate-900 opacity-50 cursor-not-allowed"
            }`}
          >

            <div className="flex items-center gap-3 text-white">

              {item.icon}

              <span>{item.title}</span>

            </div>

          </button>

        ))}

      </div>

    </div>

  );

}
