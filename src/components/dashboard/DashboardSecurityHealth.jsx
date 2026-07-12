
"use client";

import { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function DashboardSecurityHealth() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    loadLocations();
  }, []);

  async function loadLocations() {

    const { data } = await supabase
      .from("device_locations")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    if (data) {
      setLocations(data);
    }

  }

  return (

    <div className="rounded-2xl bg-slate-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-6">
        Live Location Timeline
      </h2>

      <div className="space-y-5">

        {locations.length === 0 ? (

          <p className="text-slate-400">
            Waiting for live GPS updates...
          </p>

        ) : (

          locations.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b border-slate-700 pb-3"
            >

              <div>

                <div className="flex items-center gap-2">

                  <MapPin
                    className="text-cyan-400"
                    size={18}
                  />

                  <span>

                    {item.latitude},
                    {item.longitude}

                  </span>

                </div>

              </div>

              <div className="flex items-center gap-2 text-slate-400">

                <Clock size={16} />

                {new Date(item.created_at)
                  .toLocaleTimeString()}

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}




