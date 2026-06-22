import { NextResponse } from "next/server";

export async function POST(request) {
try {
const data = await request.json();


console.log("Device Agent Sync:", data);

return NextResponse.json({
  success: true,
  message: "Telemetry received",
  device: data.device_id,
});


} catch (error) {
return NextResponse.json(
{
success: false,
error: error.message,
},
{ status: 500 }
);
}
}
