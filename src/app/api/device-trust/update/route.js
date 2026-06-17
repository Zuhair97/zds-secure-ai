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

      let riskLevel = "LOW";

      const now = new Date();
      const lastSeen = device.last_seen
        ? new Date(device.last_seen)
        : null;

      let daysOffline = 0;

      if (lastSeen) {
        daysOffline =
          Math.floor(
            (now - lastSeen) /
            (1000 * 60 * 60 * 24)
          );
      }

      if (
        device.trusted === false
      ) {
        riskLevel = "MEDIUM";
      }

      if (
        daysOffline > 30
      ) {
        riskLevel = "HIGH";
      }

      if (
        device.status?.toLowerCase() === "compromised"
      ) {
        riskLevel = "HIGH";
      }

      await supabase
        .from("devices")
        .update({
          risk_level: riskLevel
        })
        .eq("id", device.id);

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
