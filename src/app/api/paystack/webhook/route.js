import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    if (
      body.event !== "charge.success"
    ) {
      return NextResponse.json({
        success: true,
      });
    }

    const email =
      body.data.customer.email;

    const amount =
      body.data.amount;

    const reference =
      body.data.reference;

    const { error } =
      await supabaseAdmin
        .from("profiles")
        .update({
          subscription_plan:
            "Premium Africa",
          paystack_email:
            email,
          payment_reference:
            reference,
        })
        .eq("email", email);

    if (error) {
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

    return NextResponse.json({
      success: true,
      email,
      amount,
      reference,
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
