import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {

  try {

    const data = await request.json();
console.log("Incoming user_id:", data.user_id);

const { data: checkUser, error: checkError } =
  await supabaseAdmin
    .from("users")
    .select("id,email")
    .eq("id", data.user_id)
    .maybeSingle();

console.log("User lookup:", checkUser);
console.log("Lookup error:", checkError);
    console.log("SYNC PAYLOAD:", data);
    if (!data.device_id) {
      return NextResponse.json(
        {
          success: false,
          message: "device_id is required"
        },
        {
          status: 400
        }
      );
    }

    const devicePayload = {

      user_id: data.user_id ?? null,

      device_id: data.device_id,

      hostname: data.hostname ?? null,

      operating_system: data.operating_system ?? null,

      os_version: data.os_version ?? null,

      ip_address: data.ip_address ?? null,

      cpu_percent: data.cpu_percent ?? null,

      memory_percent: data.memory_percent ?? null,

      disk_percent: data.disk_percent ?? null,

      battery_level: data.battery_level ?? null,

      battery_status: data.battery_status ?? null,

      battery_temperature: data.battery_temperature ?? null,

      latitude: data.latitude ?? null,

      longitude: data.longitude ?? null,

      provider: data.provider ?? null,

      accuracy: data.accuracy ?? null,

      fingerprint: data.fingerprint ?? null,

      status: "online",

      last_seen: new Date().toISOString()

    };

    const { data: existingDevice, error: lookupError } =
      await supabaseAdmin
        .from("devices")
        .select("*")
        .eq("device_id", data.device_id)
        .maybeSingle();

    if (lookupError) {

      return NextResponse.json(
        {
          success: false,
          message: lookupError.message
        },
        {
          status: 500
        }
      );

    }

    // ===== END OF PART 1 =====
    let trustScore = 100;
    let riskLevel = "low";
    let riskReason = "Normal device activity";

    // ========= Verify linked user =========

    if (devicePayload.user_id) {

      const { data: userExists } =
        await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("id", devicePayload.user_id)
          .maybeSingle();

      if (!userExists) {

        return NextResponse.json(
          {
            success: false,
            message: "Invalid user_id"
          },
          {
            status: 400
          }
        );

      }

    }

    // ========= Fingerprint Trust =========

    if (
      existingDevice &&
      existingDevice.fingerprint &&
      devicePayload.fingerprint &&
      existingDevice.fingerprint !== devicePayload.fingerprint
    ) {

      trustScore = 40;
      riskLevel = "critical";
      riskReason = "Device fingerprint changed";

    }

    devicePayload.trust_score = trustScore;
    devicePayload.risk_level = riskLevel;
    devicePayload.risk_reason = riskReason;

    // ===== END OF PART 2 =====
    // ========= DEVICE UPSERT =========

    if (existingDevice) {

      const { error: updateError } =
        await supabaseAdmin
          .from("devices")
          .update(devicePayload)
          .eq("device_id", devicePayload.device_id);

      if (updateError) {

        return NextResponse.json(
          {
            success: false,
            message: updateError.message
          },
          {
            status: 500
          }
        );

      }

    } else {

      const { error: insertError } =
        await supabaseAdmin
          .from("devices")
          .insert(devicePayload);

      if (insertError) {

        return NextResponse.json(
          {
            success: false,
            message: insertError.message
          },
          {
            status: 500
          }
        );

      }

    }

    // ========= DEVICE STATUS =========

    await supabaseAdmin
      .from("devices")
      .update({
        status: "online",
        last_seen: new Date().toISOString()
      })
      .eq("device_id", devicePayload.device_id);

    // ===== END OF PART 3 =====
    // ========= LOCATION HISTORY =========

    if (
      devicePayload.latitude !== null &&
      devicePayload.latitude !== undefined &&
      devicePayload.longitude !== null &&
      devicePayload.longitude !== undefined
    ) {

      await supabaseAdmin
        .from("device_locations")
        .insert({

          device_id: devicePayload.device_id,

          latitude: devicePayload.latitude,

          longitude: devicePayload.longitude,

          accuracy: devicePayload.accuracy,

          provider: devicePayload.provider,

          created_at: new Date().toISOString()

        });

    }

    // ========= AUDIT LOG =========

    await supabaseAdmin
      .from("audit_logs")
      .insert({

        user_id: devicePayload.user_id,

        device_id: devicePayload.device_id,

        action: "DEVICE_SYNC",

        severity: riskLevel,

        description:
          "Device synchronized with ZDS Secure AI.",

        metadata: {

          hostname: devicePayload.hostname,

          operating_system:
            devicePayload.operating_system,

          trust_score: trustScore,

          fingerprint:
            devicePayload.fingerprint

        },

        created_at: new Date().toISOString()

      });

    // ========= TELEMETRY =========

    await supabaseAdmin
      .from("device_telemetry")
      .insert({

        device_id: devicePayload.device_id,

        cpu_percent: devicePayload.cpu_percent,

        memory_percent: devicePayload.memory_percent,

        disk_percent: devicePayload.disk_percent,

        battery_level: devicePayload.battery_level,

        battery_status: devicePayload.battery_status,

        battery_temperature:
          devicePayload.battery_temperature,

        trust_score: trustScore,

        created_at: new Date().toISOString()

      });

    // ===== END OF PART 4 =====
    // ========= SUCCESS RESPONSE =========

    return NextResponse.json({

      success: true,

      message: "Device synced successfully",

      device_id: devicePayload.device_id,

      user_id: devicePayload.user_id,

      trust_score: trustScore,

      risk_level: riskLevel,

      risk_reason: riskReason,

      status: "online",

      synced_at: new Date().toISOString()

    });

  } catch (error) {

    console.error("SYNC ENGINE ERROR:", error);

    return NextResponse.json(

      {

        success: false,

        message: "Sync Engine Failure",

        error: error.message

      },

      {

        status: 500

      }

    );

  }

}
