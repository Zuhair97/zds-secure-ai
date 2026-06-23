import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const data = await request.json();

    const payload = {
      device_id: data.device_id,
      hostname: data.hostname || null,

      operating_system: data.operating_system || null,
      os_version: data.os_version || null,

      ip_address: data.ip_address || null,

      latitude: data.latitude || null,
      longitude: data.longitude || null,

      provider: data.provider || null,
      accuracy: data.accuracy || null,

      cpu_percent: data.cpu_percent || null,
      memory_percent: data.memory_percent || null,
      disk_percent: data.disk_percent || null,

      battery_level: data.battery_level || null,
      battery_status: data.battery_status || null,
      battery_temperature: data.battery_temperature || null,

      fingerprint: data.fingerprint || null,

      trust_score: 100,
      risk_level: "low",
      status: "online",

      last_seen: new Date().toISOString()
    };

    const { data: existingDevice } = await supabaseAdmin
      .from("devices")
      .select("id")
      .eq("device_id", data.device_id)
      .maybeSingle();

    let result;

    if (existingDevice) {
      result = await supabaseAdmin
        .from("devices")
        .update(payload)
        .eq("device_id", data.device_id);
    } else {
      result = await supabaseAdmin
        .from("devices")
        .insert(payload);
    }

    if (result.error) {
      throw result.error;
    }

    return NextResponse.json({
      success: true,
      message: "Device synced successfully",
      device: data.device_id,
      trust_score: 100,
      risk_level: "low",
      status: "online"
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      {
        status: 500
      }
    );
  }
}



