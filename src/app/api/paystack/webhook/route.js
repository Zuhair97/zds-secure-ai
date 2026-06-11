import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabaseAdmin = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
try {
const rawBody = await request.text();

```
const signature =
  request.headers.get("x-paystack-signature");

const hash = crypto
  .createHmac(
    "sha512",
    process.env.PAYSTACK_SECRET_KEY
  )
  .update(rawBody)
  .digest("hex");

if (signature !== hash) {
  return NextResponse.json(
    {
      success: false,
      message: "Invalid signature",
    },
    {
      status: 401,
    }
  );
}

const body = JSON.parse(rawBody);

if (body.event !== "charge.success") {
  return NextResponse.json({
    success: true,
  });
}

const email =
  body.data.customer.email;

const reference =
  body.data.reference;

const expiresAt = new Date();
expiresAt.setDate(
  expiresAt.getDate() + 30
);

const { error } =
  await supabaseAdmin
    .from("profiles")
    .update({
      subscription_plan:
        "Premium Africa",
      subscription_status:
        "active",
      subscription_expires_at:
        expiresAt.toISOString(),
      billing_cycle:
        "monthly",
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
});
```

} catch (error) {

```
return NextResponse.json(
  {
    success: false,
    message: error.message,
  },
  {
    status: 500,
  }
);
```

}
}
