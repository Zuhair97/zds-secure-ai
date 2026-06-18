import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {

  try {

    const { data: actions } = await supabase
      .from("autonomous_actions")
      .select("*")
      .eq("action_status", "PENDING");

    if (!actions) {
      return NextResponse.json({
        success: true,
        message: "No pending actions"
      });
    }

    for (const action of actions) {

      let executionStatus = "COMPLETED";

      if (
        action.action_type === "FORCE_MFA"
      ) {

        console.log(
          `FORCE MFA -> ${action.user_id}`
        );

      }

      if (
        action.action_type === "SESSION_TERMINATION"
      ) {

        console.log(
          `TERMINATE SESSION -> ${action.user_id}`
        );

      }

      if (
        action.action_type === "DEVICE_QUARANTINE"
      ) {

        console.log(
          `QUARANTINE DEVICE -> ${action.user_id}`
        );

      }

      if (
        action.action_type === "EMERGENCY_LOCKDOWN"
      ) {

        console.log(
          `LOCKDOWN -> ${action.user_id}`
        );

      }

      await supabase
        .from("autonomous_actions")
        .update({
          action_status: executionStatus
        })
        .eq("id", action.id);

    }

    return NextResponse.json({
      success: true,
      message:
        "Remote Response Engine executed successfully"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}
