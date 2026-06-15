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
        error: "No risk data found",
      });
    }

    for (const risk of risks) {

      const correlation =
        correlations?.find(
          (c) => c.user_id === risk.user_id
        );

      const userDevices =
        devices?.filter(
          (d) => d.user_id === risk.user_id
        ) || [];

      let actionType = null;
      let reason = "";
      let confidence = 0;

      if (
        risk.risk_score >= 80 ||
        correlation?.correlation_level === "CRITICAL"
      ) {

        actionType = "EMERGENCY_LOCKDOWN";
        reason =
          "Critical risk and threat correlation detected.";
        confidence = 95;

      } else if (
        risk.risk_score >= 60
      ) {

        actionType = "SESSION_TERMINATION";
        reason =
          "High-risk activity detected.";
        confidence = 88;

      } else if (
        userDevices.some(
          (d) =>
            d.risk_level?.toLowerCase() === "high"
        )
      ) {

        actionType = "DEVICE_QUARANTINE";
        reason =
          "High-risk device detected.";
        confidence = 85;

      } else if (
        risk.risk_score >= 25
      ) {

        actionType = "FORCE_MFA";
        reason =
          "Medium-risk activity detected.";
        confidence = 75;

      }

      if (actionType) {

        await supabase
          .from("autonomous_actions")
          .insert({
            user_id: risk.user_id,
            action_type: actionType,
            action_status: "PENDING",
            reason,
            confidence_score: confidence,
          });

      }

    }

    return NextResponse.json({
      success: true,
      message:
        "Autonomous Response Intelligence updated successfully",
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message,
    });

  }
}
