import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {

  try {

    const { reference } =
      await request.json();

    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization:
            `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const verifyData =
      await verifyResponse.json();

    if (
      !verifyData.status ||
      verifyData.data.status !== "success"
    ) {

      return NextResponse.json(
        {
          success: false,
          message: "Payment not verified",
        },
        {
          status: 400,
        }
      );

    }

    const email =
      verifyData.data.customer.email;

    const { error } =
      await supabaseAdmin
        .from("profiles")
        .update({
          subscription_plan:
            "Premium Africa",
          paystack_email:
            email,
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
      message:
        "Subscription upgraded successfully",
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
