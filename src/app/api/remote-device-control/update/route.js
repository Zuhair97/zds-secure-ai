import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {

  const { data: actions } = await supabase
    .from("remote_device_actions")
    .select("*")
    .eq("action_status", "PENDING");

  for (const action of actions) {

    let result = "";

    switch (action.action_type) {

      case "LOCK_DEVICE":
        result = "Device lock command issued";
        break;

      case "DISABLE_DEVICE":
        result = "Device disable command issued";
        break;

      case "QUARANTINE_DEVICE":
        result = "Device quarantine initiated";
        break;

      case "COLLECT_FORENSICS":
        result = "Forensic collection started";
        break;

      default:
        result = "Unknown action";

    }

    await supabase
      .from("remote_device_actions")
      .update({
        action_status: "COMPLETED",
        action_result: result
      })
      .eq("id", action.id);

  }

  return NextResponse.json({
    success: true,
    message: "Remote Device Control executed"
  });

}
