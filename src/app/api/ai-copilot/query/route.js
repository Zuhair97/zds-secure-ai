import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {

  try {

    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({
        success: false,
        error: "Query required"
      });
    }

    const lower = query.toLowerCase();

    // Highest Risk Users
    if (
      lower.includes("highest risk") ||
      lower.includes("high risk users")
    ) {

      const { data } = await supabase
        .from("risk_engine")
        .select("*")
        .order("risk_score", { ascending: false })
        .limit(10);

      return NextResponse.json({
        success: true,
        answer: data
      });

    }

    // Suspicious Devices
    if (
      lower.includes("devices") ||
      lower.includes("quarantine")
    ) {

      const { data } = await supabase
        .from("devices")
        .select("*")
        .eq("risk_level", "HIGH");

      return NextResponse.json({
        success: true,
        answer: data
      });

    }

    // Predictions
    if (
      lower.includes("prediction")
    ) {

      const { data } = await supabase
        .from("predictive_defense")
        .select("*")
        .order("prediction_score", {
          ascending: false
        })
        .limit(10);

      return NextResponse.json({
        success: true,
        answer: data
      });

    }

    return NextResponse.json({
      success: true,
      answer:
        "Query understood but no matching intelligence module found."
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }
}
