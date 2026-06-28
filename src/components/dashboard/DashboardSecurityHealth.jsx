"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "AI Protection",
    status: "Active",
  },
  {
    title: "Device Integrity",
    status: "Verified",
  },
  {
    title: "Fingerprint",
    status: "Trusted",
  },
  {
    title: "Anti-Theft",
    status: "Enabled",
  },
  {
    title: "Recovery",
    status: "Ready",
  },
  {
    title: "Encryption",
    status: "Secure",
  },
];

export default function DashboardSecurityHealth() {
  return (
    <Card className="rounded-2xl p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-bold">

          Security Health

        </h2>

        <Badge className="bg-green-600">

          Excellent

        </Badge>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {items.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border p-4"
          >

            <span className="font-medium">

              {item.title}

            </span>

            <Badge className="bg-green-600">

              {item.status}

            </Badge>

          </div>

        ))}

      </div>

    </Card>
  );
}
