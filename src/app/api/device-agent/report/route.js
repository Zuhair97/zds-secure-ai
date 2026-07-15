import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      command_id,
      device_id,
      status,
      result = {},
    } = body;

    if (!command_id || !device_id || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "command_id, device_id and status are required",
        },
        { status: 400 }
      );
    }

    await supabaseAdmin
      .from("device_commands")
      .update({
        status,
        result,
        completed_at: new Date().toISOString(),
      })
      .eq("id", command_id);

    await supabaseAdmin
      .from("remote_device_actions")
      .update({
        status,
        completed_at: new Date().toISOString(),
      })
      .eq("device_id", device_id)
      .eq("status", "queued");

    return NextResponse.json({
      success: true,
      message: "Execution result received.",
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
