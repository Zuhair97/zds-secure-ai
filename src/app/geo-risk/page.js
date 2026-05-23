"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function GeoRiskPage() {

  const [risk, setRisk] =
    useState("Low");

  const [events, setEvents] =
    useState([]);

  useEffect(() => {
    runGeoAnalysis();
  }, []);

  function runGeoAnalysis() {

    const mockLocations = [

      {
        country: "Nigeria",
        city: "Abuja",
        time:
          "2026-05-23T10:00:00",
      },

      {
        country: "China",
        city: "Shanghai",
        time:
          "2026-05-23T10:05:00",
      },

    ];

    const findings = [];

    if (
      mockLocations.length >= 2
    ) {

      const first =
        mockLocations[0];

      const second =
        mockLocations[1];

      const diffMinutes =
        (
          new Date(
            second.time
          ) -
          new Date(
            first.time
          )
        ) /
        1000 /
        60;

      if (
        first.country !==
          second.country &&
        diffMinutes <= 30
      ) {

        findings.push({
          level: "High",
          title:
            "Impossible Travel Detected",
          description:
            `${first.city}, ${first.country} → ${second.city}, ${second.country} within ${diffMinutes} minutes.`,
        });

        setRisk("High");

      }

    }

    if (findings.length === 0) {

      findings.push({
        level: "Safe",
        title:
          "No Geo Threats",
        description:
          "AI did not detect suspicious geographic activity.",
      });

    }

    setEvents(findings);
  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-black text-white p-6">

        <h1 className="text-5xl font-bold mb-3">
          Geo-Risk Intelligence
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-powered location intelligence and impossible travel detection.
        </p>

        <div className={`rounded-2xl p-6 border mb-10 ${
          risk === "High"
            ? "bg-red-950 border-red-700"
            : "bg-green-950 border-green-700"
        }`}>

          <h2 className="text-3xl font-bold mb-3">
            AI Geo-Risk Status
          </h2>

          <p className="text-5xl font-bold">
            {risk}
          </p>

        </div>

        <div className="grid gap-6">

          {events.map(
            (item, index) => (

              <div
                key={index}
                className={`rounded-2xl p-6 border ${
                  item.level ===
                  "High"
                    ? "bg-red-950 border-red-700"
                    : "bg-green-950 border-green-700"
                }`}
              >

                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>

                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    item.level ===
                    "High"
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-black"
                  }`}>

                    {item.level}

                  </span>

                </div>

                <p className="text-zinc-200 text-lg leading-8">
                  {item.description}
                </p>

              </div>

            )
          )}

        </div>

      </main>

    </ProtectedRoute>
  );
}
