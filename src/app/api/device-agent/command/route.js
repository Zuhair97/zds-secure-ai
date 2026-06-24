import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {

    const body = await request.json();

    const device_id = body.device_id;
    const command = body.command;

    if (!device_id || !command) {
      return NextResponse.json(
        {
          success: false,
          error: "device_id and command are required"
        },
        {
          status: 400
        }
      );
    }

    const { error } = await supabaseAdmin
      .from("device_commands")
      .insert({
        device_id,
        command,
        status: "pending"
      });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: "Command queued",
      device_id,
      command
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      {
        status: 500
      }
    );

  }
}
