import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {

    try {

        const body = await request.json();

        const {
            token,
            device_id,
            device_name,
            device_model,
            device_type
        } = body;

        if (!token || !device_id) {

            return NextResponse.json(
                {
                    success: false,
                    message: "token and device_id required"
                },
                {
                    status: 400
                }
            );

        }

        const { data: registration, error } =
            await supabaseAdmin
                .from("device_registration_tokens")
                .select("*")
                .eq("token", token)
                .eq("status", "pending")
                .single();

        if (error || !registration) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid registration token"
                },
                {
                    status: 401
                }
            );

        }

        if (new Date(registration.expires_at) < new Date()) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Registration token expired"
                },
                {
                    status: 401
                }
            );

        }

        await supabaseAdmin
            .from("devices")
            .update({

                user_id: registration.user_id,

                device_name,

                device_model,

                device_type

            })
            .eq("device_id", device_id);

        await supabaseAdmin
            .from("device_registration_tokens")
            .update({

                status: "used",

                used_at: new Date()

            })
            .eq("id", registration.id);

        return NextResponse.json({

            success: true,

            message: "Device Registered Successfully",

            user_id: registration.user_id

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
