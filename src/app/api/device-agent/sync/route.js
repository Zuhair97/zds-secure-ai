import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { calculateRisk } from "@/lib/risk-engine";

export async function POST(request) {
  try {
    const data = await request.json();

    const risk = calculateRisk(data);

    const deviceRecord = {
      device_id: data.device_id,
      hostname: data.hostname || null,
      operating_system: data.operating_system || null,
      os_version: data.os_version || null,
      ip_address: data.ip_address || null,

      cpu_percent: data.cpu_percent || null,
      memory_percent: data.memory_percent || null,
      disk_percent: data.disk_percent || null,

      latitude: data.latitude || null,
      longitude: data.longitude || null,

      trust_score: risk.trust_score,
      risk_level: risk.risk_level,
      risk_reason: risk.risk_reason,
      status: risk.status,

      last_seen: new Date().toISOString(),
    };

    const { error } = await supabaseAdmin
      .from("devices")
      .upsert(deviceRecord, {
        onConflict: "device_id",
      });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: "Device synced successfully",
      device: data.device_id,
      trust_score: risk.trust_score,
      risk_level: risk.risk_level,
      status: risk.status,
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
