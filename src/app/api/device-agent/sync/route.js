import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.json();

    const dbPath = path.join(
      process.cwd(),
      "device-registry.json"
    );

    let devices = [];

    if (fs.existsSync(dbPath)) {
      devices = JSON.parse(
        fs.readFileSync(dbPath, "utf8")
      );
    }

    const existing = devices.find(
      d => d.device_id === data.device_id
    );

    if (existing) {
      Object.assign(existing, {
        ...data,
        last_seen: new Date().toISOString(),
        status: "online",
      });
    } else {
      devices.push({
        ...data,
        trust_score: 100,
        status: "online",
        last_seen: new Date().toISOString(),
      });
    }

    fs.writeFileSync(
      dbPath,
      JSON.stringify(devices, null, 2)
    );

    return NextResponse.json({
      success: true,
      message: "Device synced",
      device: data.device_id,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
