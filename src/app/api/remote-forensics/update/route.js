import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {

  try {

    const { data: devices } = await supabase
      .from("devices")
      .select("*");

    for (const device of devices || []) {

      await supabase
        .from("remote_forensics")
        .insert({

          user_id: device.user_id,
          device_id: device.id,

          forensic_type: "SYSTEM_SNAPSHOT",

          collected_data: {
            hostname: device.device_name,
            os: device.operating_system,
            ip: device.ip_address,
            risk_level: device.risk_level,
            status: device.status,
            collected_at: new Date()
          }

        });

    }

    return NextResponse.json({
      success: true,
      message: "Remote Forensics collection completed"
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}
