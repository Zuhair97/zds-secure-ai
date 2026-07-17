import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request) {

  try {

    const { searchParams } = new URL(request.url);

    const device_id = searchParams.get("device_id");


    if (!device_id) {

      return NextResponse.json(
        {
          success: false,
          message: "device_id is required"
        },
        {
          status: 400
        }
      );

    }


    // Get device registry information

    const { data: device, error: deviceError } =
      await supabaseAdmin
        .from("device_registry")
        .select("*")
        .eq("device_id", device_id)
        .maybeSingle();



    if (deviceError) {

      return NextResponse.json(
        {
          success: false,
          message: deviceError.message
        },
        {
          status: 500
        }
      );

    }



    if (!device) {

      return NextResponse.json(
        {
          success: false,
          message: "Device not found"
        },
        {
          status: 404
        }
      );

    }



    // Get trust information

    const { data: trust } =
      await supabaseAdmin
        .from("device_trust")
        .select("*")
        .eq("device_id", device_id)
        .maybeSingle();



    // Get pending remote commands

    const { data: commands } =
      await supabaseAdmin
        .from("remote_device_actions")
        .select("*")
        .eq("device_id", device_id)
        .eq("status", "pending")
        .order("created_at", {
          ascending: false
        });



    return NextResponse.json({

      success: true,

      device: {

        device_id: device.device_id,

        device_name:
          device.device_name ||
          device.model ||
          device.hostname,


        status: device.status,

        battery_level:
          device.battery_level,


        operating_system:
          device.operating_system,


        last_seen:
          device.last_seen,


        recovery_mode:
          device.recovery_mode,


        trust_score:
          trust?.trust_score ??
          device.trust_score ??
          0,


        risk_level:
          trust?.risk_level ??
          device.risk_level ??
          "unknown",

      },


      pending_commands:
        commands || [],


      checked_at:
        new Date().toISOString()

    });



  } catch (error) {


    console.error(
      "DEVICE STATUS ENGINE ERROR:",
      error
    );


    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      {
        status: 500
      }
    );


  }

}
