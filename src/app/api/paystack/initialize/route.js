import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    const { email } = await request.json();

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: 500000, // ₦5000
          callback_url:

        "https://zds-secure-ai.vercel.app/subscriptions",",
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);

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





