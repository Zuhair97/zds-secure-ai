import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {

try {


const now = new Date().toISOString();

const { error } =
  await supabaseAdmin
    .from("profiles")
    .update({
      subscription_plan: "Free",
      subscription_status: "expired",
      billing_cycle: null,
    })
    .lt(
      "subscription_expires_at",
      now
    )
    .eq(
      "subscription_status",
      "active"
    );

if (error) {
  throw error;
}

return NextResponse.json({
  success: true,
  message:
    "Expired subscriptions processed",
});


} catch (error) {


return NextResponse.json(
  {
    success: false,
    message: error.message,
  },
  {
    status: 500,
  }
);


}

}
