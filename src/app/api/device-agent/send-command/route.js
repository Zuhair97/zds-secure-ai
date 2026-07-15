import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      device_id,
      command,
      payload = {},
      issued_by = null,
    } = body;

    if (!device_id || !command) {
      return NextResponse.json(
        {
          success: false,
          message: "device_id and command are required",
        },
        { status: 400 }
      );
    }

    // Store command queue
    const { data: queuedCommand, error: queueError } =
      await supabaseAdmin
        .from("device_commands")
        .insert({
          device_id,
          command,
          payload,
          status: "pending",
          issued_by,
          created_at: new Date().toISOString(),
        })
        .select()
        .single();

    if (queueError) {
      return NextResponse.json(
        {
          success: false,
          message: queueError.message,
        },
        { status: 500 }
      );
    }

    // Audit remote action
    await supabaseAdmin
      .from("remote_device_actions")
      .insert({
        device_id,
        action: command,
        status: "queued",
        issued_by,
        created_at: new Date().toISOString(),
      });

    return NextResponse.json({
      success: true,
      message: "Remote command queued successfully.",
      command: queuedCommand,
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
