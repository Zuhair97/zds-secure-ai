import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {
    // Users
    const { data: users } = await supabase
      .from("profiles")
      .select("id,email");

    if (!users) {
      return NextResponse.json({
        success: false,
        error: "No users found",
      });
    }

    for (const user of users) {

      // Telemetry
      const { data: telemetry } = await supabase
        .from("telemetry_logs")
        .select("*")
        .eq("user_id", user.id);

      // AI Events
      const { data: aiEvents } = await supabase
        .from("ai_events")
        .select("*")
        .eq("user_id", user.id);

      // Threat Intelligence
      const { data: threats } = await supabase
        .from("threat_intelligence")
        .select("*")
        .eq("is_active", true);

      // Devices
      const { data: devices } = await supabase
        .from("devices")
        .select("*")
        .eq("user_id", user.id);

      let score = 0;

      // TELEMETRY SCORE
      if (telemetry?.length) {
        telemetry.forEach((event) => {
          score += Number(event.risk_score || 0);
        });
      }

      // AI EVENTS SCORE
      if (aiEvents?.length) {
        aiEvents.forEach((event) => {

          score += Math.floor(
            Number(event.ai_confidence || 0) / 10
          );

          if (
            event.threat_level?.toLowerCase() === "critical"
          ) {
            score += 25;
          }

          if (
            event.threat_level?.toLowerCase() === "high"
          ) {
            score += 15;
          }

          if (
            event.threat_level?.toLowerCase() === "medium"
          ) {
            score += 8;
          }
        });
      }

      // ACTIVE THREATS SCORE
      if (threats?.length) {
        threats.forEach((threat) => {

          if (
            threat.severity?.toLowerCase() === "high"
          ) {
            score += 10;
          }

          if (
            threat.severity?.toLowerCase() === "medium"
          ) {
            score += 5;
          }

          if (
            threat.severity?.toLowerCase() === "low"
          ) {
            score += 2;
          }
        });
      }

      // DEVICES SCORE
      let riskyDevices = 0;

      if (devices?.length) {

        devices.forEach((device) => {

          if (
            device.risk_level?.toLowerCase() === "high"
          ) {
            score += 15;
            riskyDevices++;
          }

          if (
            device.risk_level?.toLowerCase() === "medium"
          ) {
            score += 8;
            riskyDevices++;
          }

          if (
            device.trusted === false
          ) {
            score += 5;
          }
        });
      }

      // LIMIT SCORE
      if (score > 100) {
        score = 100;
      }

      let level = "LOW";
      let recommendation =
        "Continue monitoring.";

      if (score >= 75) {
        level = "CRITICAL";
        recommendation =
          "Immediate response required. Initiate containment.";
      } else if (score >= 50) {
        level = "HIGH";
        recommendation =
          "Elevated threat activity detected. Review incidents immediately.";
      } else if (score >= 25) {
        level = "MEDIUM";
        recommendation =
          "Investigate suspicious activity and verify trusted devices.";
      }

      await supabase
        .from("threat_correlation")
        .upsert({
          user_id: user.id,
          correlation_score: score,
          correlation_level: level,
          telemetry_events:
            telemetry?.length || 0,
          ai_events:
            aiEvents?.length || 0,
          active_threats:
            threats?.length || 0,
          risky_devices:
            riskyDevices,
          recommendation,
        });
    }

    return NextResponse.json({
      success: true,
      message:
        "Threat Correlation Engine updated successfully",
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
