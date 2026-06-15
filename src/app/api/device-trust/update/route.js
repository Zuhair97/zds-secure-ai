import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {

    const { data: devices } = await supabase
      .from("devices")
      .select("*");

    if (!devices) {
      return NextResponse.json({
        success: false,
        error: "No devices found"
      });
    }

    for (const device of devices) {

      let score = 100;

      if (device.trusted === false)
        score -= 30;

      if (
        device.risk_level?.toLowerCase() === "high"
      )
        score -= 40;

      if (
        device.risk_level?.toLowerCase() === "medium"
      )
        score -= 20;

      if (
        device.status?.toLowerCase() !== "active"
      )
        score -= 10;

      if (score < 0)
        score = 0;

      let level = "TRUSTED";
      let recommendation =
        "Device appears trusted.";

      if (score < 80) {
        level = "SUSPICIOUS";
        recommendation =
          "Review device activity.";
      }

      if (score < 50) {
        level = "ROGUE";
        recommendation =
          "Investigate and isolate device.";
      }

      await supabase
        .from("device_trust")
        .upsert({
          user_id: device.user_id,
          device_id: device.id,
          trust_score: score,
          trust_level: level,
          recommendation,
          updated_at:
            new Date().toISOString(),
        });

    }

    return NextResponse.json({
      success: true,
      message:
        "Device Trust Engine updated successfully"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }
}
