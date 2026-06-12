"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SecurityReportsPage() {
  const supabase = createClient();

  const [stats, setStats] = useState({
    total: 0,
    high: 0,
    medium: 0,
    low: 0,
  });

  const [report, setReport] = useState(null);

  useEffect(() => {
    loadThreatStats();
  }, []);

  async function loadThreatStats() {
    const { data } = await supabase
      .from("threat_intelligence")
      .select("*");

    if (!data) return;

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

    setStats({
      total: data.length,
      high,
      medium,
      low,
    });
  }

  function generateReport() {
    const riskScore =
      Math.min(
        100,
        stats.high * 20 +
          stats.medium * 10 +
          stats.low * 5
      );

    let riskLevel = "LOW";

    if (riskScore >= 70) {
      riskLevel = "HIGH";
    } else if (riskScore >= 40) {
      riskLevel = "MEDIUM";
    }

    const executiveSummary = `
ZDS Secure AI identified ${stats.total}
active threats.

High Risk Threats: ${stats.high}

Medium Risk Threats: ${stats.medium}

Low Risk Threats: ${stats.low}

Overall security posture is currently
classified as ${riskLevel} risk.

Immediate monitoring and mitigation
recommended for critical assets.
`;

    setReport({
      riskScore,
      riskLevel,
      executiveSummary,
    });
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-8">
          Security Reports Center
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h2>Total Threats</h2>
            <p className="text-4xl font-bold">
              {stats.total}
            </p>
          </div>

          <div className="bg-red-900 p-6 rounded-3xl">
            <h2>High Risk</h2>
            <p className="text-4xl font-bold">
              {stats.high}
            </p>
          </div>

          <div className="bg-yellow-700 p-6 rounded-3xl">
            <h2>Medium Risk</h2>
            <p className="text-4xl font-bold">
              {stats.medium}
            </p>
          </div>

          <div className="bg-green-800 p-6 rounded-3xl">
            <h2>Low Risk</h2>
            <p className="text-4xl font-bold">
              {stats.low}
            </p>
          </div>

        </div>

        <button
          onClick={generateReport}
          className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold"
        >
          Generate Executive Report
        </button>

        {report && (
          <div className="mt-10 bg-zinc-900 p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6">
              Executive Security Report
            </h2>

            <div className="mb-6">
              <p className="text-xl">
                Risk Score:
              </p>

              <p className="text-6xl font-bold text-cyan-400">
                {report.riskScore}/100
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xl">
                Risk Level:
              </p>

              <p className="text-4xl font-bold">
                {report.riskLevel}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Executive Summary
              </h3>

              <pre className="whitespace-pre-wrap text-zinc-300">
                {report.executiveSummary}
              </pre>
            </div>

          </div>
        )}

      </main>
    </ProtectedRoute>
  );
}
