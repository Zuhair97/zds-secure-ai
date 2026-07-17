"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";

export default function useDevices() {
  const { user } = useAuth();

  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDevices() {
      if (!user?.id) return;

      try {
        const res = await fetch("/api/device-registry/my-devices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
          }),
        });

        const data = await res.json();

        if (data.success) {
          setDevices(data.devices);
        }
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    loadDevices();
  }, [user]);

  return {
    devices,
    loading,
  };
}
