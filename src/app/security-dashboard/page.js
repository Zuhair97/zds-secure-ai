

"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { createClient } from "@/lib/supabase";

export default function SecurityDashboardPage() {

const supabase = createClient();

const [loading, setLoading] = useState(true);

const [stats, setStats] = useState({
total: 0,
high: 0,
medium: 0,
low: 0,
score: 100,
level: "Excellent",
});

useEffect(() => {
loadSecurityData();


const interval = setInterval(
  loadSecurityData,
  10000
);

return () => clearInterval(interval);


}, []);

async function loadSecurityData() {


const { data } = await supabase
  .from("threat_intelligence")
  .select("*")
  .eq("is_active", true);

if (!data) {
  setLoading(false);
  return;
}

const high =
  data.filter(
    (x) =>
      x.severity?.toLowerCase() === "high"
  ).length;

const medium =
  data.filter(
    (x) =>
      x.severity?.toLowerCase() === "medium"
  ).length;

const low =
  data.filter(
    (x) =>
      x.severity?.toLowerCase() === "low"
  ).length;

let score =
  100 -
  high * 15 -
  medium * 8 -
  low * 3;

score = Math.max(0, score);

let level = "Excellent";

if (score < 40) {
  level = "Critical";
} else if (score < 70) {
  level = "Medium";
} else if (score < 90) {
  level = "Good";
}

setStats({
  total: data.length,
  high,
  medium,
  low,
  score,
  level,
});

setLoading(false);


}

function getLevelColor() {


switch (stats.level) {

  case "Critical":
    return "text-red-400";

  case "Medium":
    return "text-yellow-400";

  case "Good":
    return "text-cyan-400";

  default:
    return "text-green-400";
}


}

function recommendation() {


if (stats.level === "Critical") {
  return "Immediate security intervention required.";
}

if (stats.level === "Medium") {
  return "Increase monitoring and incident review.";
}

if (stats.level === "Good") {
  return "Security posture is stable with minor risks.";
}

return "Security posture is excellent.";


}

return ( <ProtectedRoute>


  <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-cyan-950 text-white p-6">

    <div className="mb-10">

      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
        Security Score Engine
      </h1>

      <p className="text-zinc-300 text-lg">
        Real-time AI security posture assessment.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <h2>Total Threats</h2>
        <p className="text-4xl font-bold">
          {stats.total}
        </p>
      </div>

      <div className="bg-red-950 p-6 rounded-3xl">
        <h2>High Risk</h2>
        <p className="text-4xl font-bold">
          {stats.high}
        </p>
      </div>

      <div className="bg-yellow-900 p-6 rounded-3xl">
        <h2>Medium Risk</h2>
        <p className="text-4xl font-bold">
          {stats.medium}
        </p>
      </div>

      <div className="bg-green-900 p-6 rounded-3xl">
        <h2>Low Risk</h2>
        <p className="text-4xl font-bold">
          {stats.low}
        </p>
      </div>

      <div className="bg-cyan-950 p-6 rounded-3xl">
        <h2>Security Score</h2>
        <p className="text-4xl font-bold">
          {stats.score}/100
        </p>
      </div>

    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl">

      <h2 className="text-3xl font-bold mb-6">
        AI Security Assessment
      </h2>

      <p className={`text-6xl font-bold ${getLevelColor()}`}>
        {stats.level}
      </p>

      <p className="text-zinc-300 mt-6 text-xl">
        {recommendation()}
      </p>

    </div>

    {loading && (
      <p className="mt-6">
        Loading security intelligence...
      </p>
    )}

  </main>

</ProtectedRoute>


);
}




