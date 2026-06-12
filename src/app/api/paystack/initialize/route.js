import { NextResponse } from "next/server";

export async function POST(request) {
try {


const {
  email,
  plan,
} = await request.json();

let amount = 500000;

switch (plan) {

  case "Personal":
    amount = 250000;
    break;

  case "Premium":
    amount = 500000;
    break;

  case "Professional":
    amount = 1000000;
    break;

  case "Web3 Security":
    amount = 1000000;
    break;

  case "Business":
    amount = 2500000;
    break;

  default:
    amount = 500000;

}

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
      amount,

      metadata: {
        plan,
      },

      callback_url:
        "https://zds-secure-ai.vercel.app/subscriptions",
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






