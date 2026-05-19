export async function GET() {
  return Response.json({
    platform: "Sentinel AI",
    status: "ACTIVE",
    threatLevel: "LOW",
    monitoredAssets: 248,
    protectedWallets: 84,
    endpointDevices: 152,
    iotDevices: 64,
    aiEngine: "RUNNING"
  });
}
