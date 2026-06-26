import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.device_id) {
      return NextResponse.json(
        {
          success: false,
          error: "device_id is required",
        },
        {
          status: 400,
        }
      );
    }

    const enabled = data.enabled === true;

    const { error } = await supabaseAdmin
      .from("devices")
      .update({
        recovery_mode: enabled,
      })
      .eq("device_id", data.device_id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      device: data.device_id,
      recovery_mode: enabled,
      message: enabled
        ? "Recovery Mode Enabled"
        : "Recovery Mode Disabled",
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

export async function GET(request) {

  try {

    const { searchParams } = new URL(request.url);

    const device_id = searchParams.get("device_id");

    if (!device_id) {

      return NextResponse.json(
        {
          success: false,
          error: "device_id is required",
        },
        {
          status: 400,
        }
      );

    }

    const { data, error } = await supabaseAdmin
      .from("devices")
      .select("device_id,recovery_mode,status,last_seen")
      .eq("device_id", device_id)
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      device: data,
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
