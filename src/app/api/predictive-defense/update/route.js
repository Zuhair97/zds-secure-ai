import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {

    const { data: risks } =
      await supabase
        .from("risk_engine")
        .select("*");

    const { data: correlations } =
      await supabase
        .from("threat_correlation")
        .select("*");

    const { data: aiEvents } =
      await supabase
        .from("ai_events")
        .select("*");

    const { data: devices } =
      await supabase
        .from("devices")
        .select("*");

    if (!risks) {
      return NextResponse.json({
        success: false,
        error: "No risk data found"
      });
    }

    for (const risk of risks) {

      const correlation =
        correlations?.find(
          c => c.user_id === risk.user_id
        );

      const userEvents =
        aiEvents?.filter(
          e => e.user_id === risk.user_id
        ) || [];

      const userDevices =
        devices?.filter(
          d => d.user_id === risk.user_id
        ) || [];

      let score = 0;

      score += Number(
        risk.risk_score || 0
      );

      score += Math.floor(
        Number(
          correlation?.correlation_score || 0
        ) / 2
      );

      userEvents.forEach(event => {

        score += Math.floor(
          Number(
            event.ai_confidence || 0
          ) / 10
        );

        if (
          event.threat_level?.toLowerCase() ===
          "critical"
        ) {
          score += 25;
        }

        if (
          event.threat_level?.toLowerCase() ===
          "high"
        ) {
          score += 15;
        }

        if (
          event.threat_level?.toLowerCase() ===
          "medium"
        ) {
          score += 8;
        }

      });

      userDevices.forEach(device => {

        if (
          device.risk_level?.toLowerCase() ===
          "high"
        ) {
          score += 15;
        }

        if (
          device.trusted === false
        ) {
          score += 5;
        }

      });

      if (score > 100) {
        score = 100;
      }

      let level = "LOW";
      let confidence = 60;
      let reason =
        "No significant indicators detected.";
      let recommendation =
        "Continue monitoring.";

      if (score >= 80) {

        level = "CRITICAL";
        confidence = 95;

        reason =
          "Multiple indicators suggest imminent attack activity.";

        recommendation =
          "Activate emergency containment procedures.";

      } else if (score >= 60) {

        level = "HIGH";
        confidence = 88;

        reason =
          "Strong indicators of elevated threat activity.";

        recommendation =
          "Increase monitoring and review incidents.";

      } else if (score >= 30) {

        level = "MEDIUM";
        confidence = 75;

        reason =
          "Behavioral anomalies indicate potential future threats.";

        recommendation =
          "Verify devices and enforce MFA.";

      }

      await supabase
        .from("predictive_defense")
        .insert({

          user_id:
            risk.user_id,

          prediction_score:
            score,

          prediction_level:
            level,

          confidence_score:
            confidence,

          prediction_reason:
            reason,

          recommendation

        });

    }

    return NextResponse.json({
      success: true,
      message:
        "Predictive Defense Engine updated successfully"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }
}
