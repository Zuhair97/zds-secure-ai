import { NextResponse } from "next/server";
import crypto from "crypto";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {

    try {

        const body = await request.json();

        const { user_id } = body;

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

        const token =
            "zds_reg_" +
            crypto.randomBytes(16).toString("hex");

        const expires_at = new Date(
            Date.now() + 30 * 60 * 1000
        );

        const { data, error } =
            await supabaseAdmin
                .from("device_registration_tokens")
                .insert([
                    {
                        token,
                        user_id,
                        expires_at
                    }
                ])
                .select()
                .single();

        if (error) {

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

        return NextResponse.json({

            success: true,

            token: data.token,

            expires_at: data.expires_at

        });

    } catch (err) {

        return NextResponse.json(
            {
                success: false,
                error: err.message
            },
            {
                status: 500
            }
        );

    }

}
