import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {

    const { data: profiles } = await supabase
      .from("profiles")
      .select("id,email");

    if (!profiles) {
      return NextResponse.json({
        success: false,
      });
    }

    for (const profile of profiles) {

      let riskScore = 0;

      const { data: devices } = await supabase
        .from("devices")
        .select("*")
        .eq("user_id", profile.id);

      const { data: logins } = await supabase
        .from("login_history")
        .select("*")
        .eq("user_id", profile.id);

      const { data: threats } = await supabase
        .from("threat_intelligence")
        .select("*")
        .eq("is_active", true);

      const deviceCount =
        devices?.length || 0;

      const threatCount =
        threats?.length || 0;

      if (deviceCount >= 3) {
        riskScore += 10;
      }

      if (deviceCount >= 5) {
        riskScore += 10;
      }

      devices?.forEach((device) => {

        if (!device.trusted) {
          riskScore += 15;
        }

        if (
          device.risk_level?.toLowerCase() ===
          "high"
        ) {
          riskScore += 15;
        }

      });

      if ((logins?.length || 0) >= 5) {
        riskScore += 10;
      }

      riskScore += threatCount * 5;

      if (riskScore > 100) {
        riskScore = 100;
      }

      let riskLevel = "LOW";

      if (riskScore >= 80) {
        riskLevel = "CRITICAL";
      } else if (riskScore >= 60) {
        riskLevel = "HIGH";
      } else if (riskScore >= 30) {
        riskLevel = "MEDIUM";
      }

      let recommendation =
        "Continue monitoring.";

      if (riskLevel === "MEDIUM") {
        recommendation =
          "Enable MFA and review sessions.";
      }

      if (riskLevel === "HIGH") {
        recommendation =
          "Immediate review required.";
      }

      if (riskLevel === "CRITICAL") {
        recommendation =
          "Isolate devices and initiate response.";
      }

      await supabase
        .from("risk_engine")
        .upsert({
          user_id: profile.id,
          risk_score: riskScore,
          risk_level: riskLevel,
          threat_count: threatCount,
          device_count: deviceCount,
          recommendation: recommendation,
          updated_at:
            new Date().toISOString(),
        });

    }

    return NextResponse.json({
      success: true,
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
