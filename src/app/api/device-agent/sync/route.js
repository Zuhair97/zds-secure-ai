import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const data = await request.json();

    const { error } = await supabaseAdmin
      .from("device_registry")
      .upsert(
        {
          device_id: data.device_id,
          hostname: data.hostname,
          operating_system: data.operating_system,
          os_version: data.os_version,
          ip_address: data.ip_address,

          cpu_percent: data.cpu_percent,
          memory_percent: data.memory_percent,
          disk_percent: data.disk_percent,

          latitude: data.latitude || null,
          longitude: data.longitude || null,

          trust_score: 100,
          status: "online",
          last_seen: new Date().toISOString(),
        },
        {
          onConflict: "device_id",
        }
      );

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Device synced successfully",
      device: data.device_id,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
