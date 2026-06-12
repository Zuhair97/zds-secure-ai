"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { createClient } from "@/lib/supabase";

export default function AISOCPage() {

const supabase = createClient();

const [threats, setThreats] = useState([]);
const [loading, setLoading] = useState(true);

async function loadThreats() {


const { data } = await supabase
  .from("threat_intelligence")
  .select("*")
  .eq("is_active", true)
  .order("created_at", { ascending: false });

if (data) {
  setThreats(data);
}

setLoading(false);


}

useEffect(() => {


loadThreats();

const interval = setInterval(
  loadThreats,
  10000
);

return () => clearInterval(interval);


}, []);

const high =
threats.filter(
(x) =>
x.severity?.toLowerCase() === "high"
).length;

const medium =
threats.filter(
(x) =>
x.severity?.toLowerCase() === "medium"
).length;

const low =
threats.filter(
(x) =>
x.severity?.toLowerCase() === "low"
).length;

const riskScore =
Math.min(
100,
high * 20 +
medium * 10 +
low * 5
);

let riskLevel = "LOW";

if (riskScore >= 70) {
riskLevel = "HIGH";
} else if (riskScore >= 40) {
riskLevel = "MEDIUM";
}

function recommendation() {


if (riskLevel === "HIGH") {
  return "Immediate incident response recommended. Critical monitoring required.";
}

if (riskLevel === "MEDIUM") {
  return "Enhanced monitoring recommended. Review suspicious activity.";
}

return "Security posture stable. Continue routine monitoring.";


}

function severityColor(level) {


switch (
  level?.toLowerCase()
) {

  case "high":
    return "bg-red-500 text-white";

  case "medium":
    return "bg-yellow-500 text-black";

  default:
    return "bg-green-500 text-black";
}


}

return (


<ProtectedRoute>

  <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-rose-950 text-white p-6">

    <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-rose-400 to-cyan-400 text-transparent bg-clip-text">
      AI Security Operations Center V2
    </h1>

    <div className="grid md:grid-cols-4 gap-6 mb-10">

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Total Threats</h2>
        <p className="text-5xl font-bold">
          {threats.length}
        </p>
      </div>

      <div className="bg-red-950 p-6 rounded-3xl">
        <h2>High Risk</h2>
        <p className="text-5xl font-bold">
          {high}
        </p>
      </div>

      <div className="bg-yellow-900 p-6 rounded-3xl">
        <h2>Medium Risk</h2>
        <p className="text-5xl font-bold">
          {medium}
        </p>
      </div>

      <div className="bg-green-900 p-6 rounded-3xl">
        <h2>Low Risk</h2>
        <p className="text-5xl font-bold">
          {low}
        </p>
      </div>

    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl mb-10">

      <h2 className="text-3xl font-bold mb-4">
        AI Risk Assessment
      </h2>

      <p className="text-6xl font-bold text-cyan-400">
        {riskScore}/100
      </p>

      <p className="text-2xl font-bold mt-3">
        Risk Level: {riskLevel}
      </p>

      <p className="text-zinc-300 mt-4">
        {recommendation()}
      </p>

    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl">

      <h2 className="text-3xl font-bold mb-8">
        Live Threat Feed
      </h2>

      {loading ? (

        <p>Loading...</p>

      ) : (

        <div className="grid gap-5">

          {threats.map((threat) => (

            <div
              key={threat.id}
              className="bg-black border border-zinc-800 rounded-2xl p-5"
            >

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-2xl font-bold">
                  {threat.threat_type}
                </h3>

                <span
                  className={`px-4 py-1 rounded-full font-bold ${severityColor(threat.severity)}`}
                >
                  {threat.severity}
                </span>

              </div>

              <p className="text-zinc-300 mb-2">
                {threat.description}
              </p>

              <p className="text-zinc-500 text-sm">
                Source: {threat.source}
              </p>

              <p className="text-zinc-500 text-sm">
                {new Date(
                  threat.created_at
                ).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  </main>

</ProtectedRoute>


);

}










