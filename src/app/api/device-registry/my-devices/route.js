import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  try {

    const { user_id } = await request.json();

    if (!user_id) {

      return NextResponse.json(
        {
          success: false,
          message: "user_id required"
        },
        {
          status: 400
        }
      );

    }

    const { data, error } =
      await supabaseAdmin
        .from("device_registry")
        .select("*")
        .eq("user_id", user_id)
        .order("last_seen", { ascending: false });

    if (error) {

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

    return NextResponse.json({

      success: true,

      devices: data

    });

  } catch (err) {

    return NextResponse.json(

      {
        success: false,
        message: err.message
      },

      {
        status: 500
      }

    );

  }
}
