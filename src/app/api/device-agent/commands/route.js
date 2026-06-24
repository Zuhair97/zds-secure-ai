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
          error: "device_id required",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("device_commands")
      .select("*")
      .eq("device_id", device_id)
      .eq("status", "pending")
      .order("created_at", { ascending: true })
      .limit(1);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return NextResponse.json({
        success: true,
        command: null,
      });
    }

    return NextResponse.json({
      success: true,
      command: data[0],
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

export async function POST(request) {
  try {
    const body = await request.json();

    const { id, result } = body;

    const { error } = await supabaseAdmin
      .from("device_commands")
      .update({
        status: "completed",
        result: result,
        executed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
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
