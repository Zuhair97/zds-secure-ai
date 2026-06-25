import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {

    const body = await request.json();

    const {
      device_id,
      command
    } = body;

    if (!device_id || !command) {
      return NextResponse.json(
        {
          success: false,
          error: "device_id and command required"
        },
        {
          status: 400
        }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("device_commands")
      .insert([
        {
          device_id,
          command,
          status: "pending"
        }
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      command: data
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
