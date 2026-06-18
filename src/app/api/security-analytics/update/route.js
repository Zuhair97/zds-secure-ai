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

    const { data: incidents } =
      await supabase
      .from("incident_investigations")
      .select("*");

    const { data: threats } =
      await supabase
      .from("threat_correlation")
      .select("*");

    const analytics = [

      {
        metric_name: "TOTAL_USERS",
        metric_value: risks?.length || 0,
        metric_category: "USERS"
      },

      {
        metric_name: "TOTAL_INCIDENTS",
        metric_value: incidents?.length || 0,
        metric_category: "INCIDENTS"
      },

      {
        metric_name: "TOTAL_THREATS",
        metric_value: threats?.length || 0,
        metric_category: "THREATS"
      }

    ];

    for (const metric of analytics) {

      await supabase
        .from("security_analytics")
        .insert(metric);

    }

    return NextResponse.json({
      success: true,
      message: "Security Analytics updated"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}
