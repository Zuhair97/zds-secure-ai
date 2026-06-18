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

    for (const risk of risks || []) {

      if (risk.risk_score < 25) continue;

      await supabase
        .from("xdr_events")
        .insert({

          user_id: risk.user_id,
          source_engine: "Risk Engine",
          event_type: "RISK_DETECTED",
          severity: risk.risk_level,
          recommendation: risk.recommendation

        });

    }

    return NextResponse.json({
      success: true,
      message: "Enterprise XDR updated"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}
