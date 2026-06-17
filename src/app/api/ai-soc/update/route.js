import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {

    const { data: risks } = await supabase
      .from("risk_engine")
      .select("*");

    const { data: correlations } = await supabase
      .from("threat_correlation")
      .select("*");

    const { data: devices } = await supabase
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

      const userDevices =
        devices?.filter(
          d => d.user_id === risk.user_id
        ) || [];

      let eventName = null;
      let threatLevel = "LOW";
      let confidence = 50;
      let recommendation =
        "Continue monitoring.";

      let deviceId = null;

      if (
        risk.risk_score >= 80 ||
        correlation?.correlation_level === "CRITICAL"
      ) {

        eventName = "CRITICAL_THREAT_DETECTED";
        threatLevel = "CRITICAL";
        confidence = 95;

        recommendation =
          "Immediate containment required.";

      } else if (
        risk.risk_score >= 60
      ) {

        eventName = "HIGH_RISK_ACTIVITY";
        threatLevel = "HIGH";
        confidence = 88;

        recommendation =
          "Investigate suspicious activity immediately.";

      } else {

        const riskyDevice =
          userDevices.find(
            d =>
              d.risk_level?.toLowerCase() === "high"
          );

        if (riskyDevice) {

          eventName =
            "COMPROMISED_DEVICE_DETECTED";

          threatLevel = "HIGH";
          confidence = 85;

          deviceId = riskyDevice.id;

          recommendation =
            "Quarantine affected device.";

        }

      }

      if (
        !eventName &&
        risk.risk_score >= 25
      ) {

        eventName =
          "ANOMALOUS_BEHAVIOR_DETECTED";

        threatLevel = "MEDIUM";
        confidence = 75;

        recommendation =
          "Force MFA verification.";

      }

      if (eventName) {

        await supabase
          .from("ai_events")
          .insert({

            user_id: risk.user_id,

            device_id: deviceId,

            event_name: eventName,

            ai_confidence: confidence,

            threat_level: threatLevel,

            recommendation,

            action_taken: false,

            metadata: {
              risk_score:
                risk.risk_score,

              correlation_score:
                correlation?.correlation_score || 0,

              generated_by:
                "AI_SOC_ENGINE_V1"
            }

          });

      }

    }

    return NextResponse.json({
      success: true,
      message:
        "AI SOC Engine updated successfully"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }
}
