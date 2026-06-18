import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {

  try {

    const { data: risks } =
      await supabase.from("risk_engine").select("*");

    const { data: threats } =
      await supabase.from("threat_correlation").select("*");

    const { data: events } =
      await supabase.from("ai_soc_events").select("*");

    for (const risk of risks || []) {

      const threat =
        threats?.find(
          t => t.user_id === risk.user_id
        );

      const userEvents =
        events?.filter(
          e => e.user_id === risk.user_id
        ) || [];

      let severity = "LOW";
      let confidence = 60;
      let title = "Routine Activity";
      let recommendation = "Continue Monitoring";

      if (
        risk.risk_score >= 80 ||
        threat?.correlation_level === "CRITICAL"
      ) {

        severity = "CRITICAL";
        confidence = 95;
        title = "Potential Active Attack";
        recommendation =
          "Immediate containment required.";

      } else if (
        risk.risk_score >= 50
      ) {

        severity = "HIGH";
        confidence = 85;
        title = "Suspicious Activity";
        recommendation =
          "Force MFA and review sessions.";

      }

      const summary =
        `Risk Score: ${risk.risk_score},
Threat Events: ${userEvents.length},
Threat Level: ${threat?.correlation_level || "NONE"}`;

      await supabase
        .from("incident_investigations")
        .insert({

          user_id: risk.user_id,
          incident_title: title,
          severity,
          confidence_score: confidence,
          investigation_summary: summary,
          recommendation

        });

    }

    return NextResponse.json({
      success: true,
      message: "Incident Investigation completed"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}
