import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("SYNC DATA:", data);
    // ========= Fingerprint Tamper Detection =========

    let trustScore = 100;
    let riskLevel = "low";
    let riskReason = "Normal device activity";

    const { data: existing } = await supabaseAdmin
      .from("devices")
      .select("*")
      .eq("device_id", data.device_id)
      .single();

    if (
      existing &&
      existing.fingerprint &&
      existing.fingerprint !== data.fingerprint
    ) {
      trustScore = 40;
      riskLevel = "critical";
      riskReason = "Device fingerprint changed";
    }

    // ========= Device Registry =========

    const devicePayload = {
      device_id: data.device_id,
      user_id: data.user_id,
      hostname: data.hostname,
      operating_system: data.operating_system,
      os_version: data.os_version,
      ip_address: data.ip_address,
      cpu_percent: data.cpu_percent,
      memory_percent: data.memory_percent,
      disk_percent: data.disk_percent,
      battery_level: data.battery_level,
      battery_status: data.battery_status,
      battery_temperature: data.battery_temperature,
      provider: data.provider,
      accuracy: data.accuracy,
      latitude: data.latitude,
      longitude: data.longitude,
      fingerprint: data.fingerprint,
      trust_score: trustScore,
      risk_level: riskLevel,
      risk_reason: riskReason,
      status: "online",
      last_seen: new Date().toISOString(),
    };

    if (existing) {
      await supabaseAdmin
        .from("devices")
        .update(devicePayload)
        .eq("device_id", data.device_id);
    } else {
      await supabaseAdmin
        .from("devices")
        .insert(devicePayload);
    }

    // ========= Location History =========

    if (
      data.latitude !== null &&
      data.latitude !== undefined &&
      data.longitude !== null &&
      data.longitude !== undefined
    ) {
      await supabaseAdmin
        .from("device_locations")
        .insert({
          device_id: data.device_id,
          latitude: data.latitude,
          longitude: data.longitude,
          accuracy: data.accuracy,
          provider: data.provider,
        });
    }

    return NextResponse.json({
      success: true,
      message: "Device synced successfully",
      device: data.device_id,
      trust_score: trustScore,
      risk_level: riskLevel,
      risk_reason: riskReason,
      status: "online",
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



