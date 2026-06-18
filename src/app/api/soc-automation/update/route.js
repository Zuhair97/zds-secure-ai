import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {

  try {

    const { data: incidents } =
      await supabase
      .from("incident_investigations")
      .select("*");

    for (const incident of incidents || []) {

      let action = null;
      let confidence = 70;

      if (incident.severity === "CRITICAL") {

        action = "EMERGENCY_LOCKDOWN";
        confidence = 95;

      } else if (incident.severity === "HIGH") {

        action = "FORCE_MFA";
        confidence = 85;

      }

      if (!action) continue;

      await supabase
        .from("soc_automation")
        .insert({

          user_id: incident.user_id,
          automation_type: "INCIDENT_RESPONSE",
          trigger_source: "AI_INCIDENT_ENGINE",
          action_taken: action,
          confidence_score: confidence

        });

    }

    return NextResponse.json({
      success: true,
      message: "SOC Automation completed"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}
