"use client";

import { Lock, Bell, MapPinned, Shield, Power, Trash2 } from "lucide-react";

export default function RemoteControlPanel() {

  const sendCommand = async (command) => {
    try {
      const response = await fetch("/api/device-agent/send-command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device_id: "CURRENT_DEVICE",
          command,
        }),
      });

      const result = await response.json();
      alert(result.message || `${command} sent successfully`);
    } catch (err) {
      alert("Failed to send command.");
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

      <h2 className="text-xl font-bold text-cyan-400 mb-6">
        Remote Control Console
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {buttons.map((item) => (
          <button
            key={item.cmd}
            onClick={() => sendCommand(item.cmd)}
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 hover:border-cyan-400 hover:bg-slate-700 transition"
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
