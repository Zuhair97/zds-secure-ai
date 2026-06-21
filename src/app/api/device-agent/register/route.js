import { NextResponse } from "next/server";

const devices = [];

export async function POST(request) {
  try {
    const data = await request.json();

    const device = {
      id: data.device_id,
      hostname: data.hostname,
      operating_system: data.operating_system,
      os_version: data.os_version,
      last_seen: new Date().toISOString(),
      status: "online",
      trust_score: 100,
    };

    devices.push(device);

    return NextResponse.json({
      success: true,
      device,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    devices,
  });
}
