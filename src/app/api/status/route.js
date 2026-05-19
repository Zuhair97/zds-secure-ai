export async function GET() {

  const systemStatus = {
    platform: "Sentinel AI",
    status: "ACTIVE",
    threatLevel: "LOW",
    monitoredAssets: 248,
    protectedWallets: 84,
    endpointDevices: 152,
    iotDevices: 64,
    aiEngine: "RUNNING",
  };

  return Response.json(systemStatus);
}

