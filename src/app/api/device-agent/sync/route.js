import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Device Agent Sync:", body);

    return NextResponse.json({
      success: true,
      received: body,
      timestamp: Date.now()
    });

  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err.message
      },
      { status: 500 }
    );
  }
}
