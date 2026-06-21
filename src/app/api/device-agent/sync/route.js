import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
try {
const data = await request.json();

```
const dbPath = path.join(process.cwd(), "device-registry.json");

let devices = [];

if (fs.existsSync(dbPath)) {
  devices = JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

devices.push({
  ...data,
  last_seen: new Date().toISOString(),
});

fs.writeFileSync(dbPath, JSON.stringify(devices, null, 2));

return NextResponse.json({
  success: true,
  message: "Telemetry received",
  device: data.device_id,
});
```

} catch (error) {
return NextResponse.json(
{ success: false, error: error.message },
{ status: 500 }
);
}
}
