"use client";

import { useEffect, useState } from "react";

export default function PredictiveDefensePage() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetch("/api/predictive-defense/list")
      .then((res) => res.json())
      .then((data) => setPredictions(data.data || []));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Predictive Defense Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">User</th>
              <th className="p-3 border">Prediction</th>
              <th className="p-3 border">Score</th>
              <th className="p-3 border">Confidence</th>
              <th className="p-3 border">Reason</th>
              <th className="p-3 border">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map((item) => (
              <tr key={item.id}>
                <td className="p-3 border">
                  {item.user_id}
                </td>

                <td className="p-3 border">
                  {item.prediction_level}
                </td>

                <td className="p-3 border">
                  {item.prediction_score}
                </td>

                <td className="p-3 border">
                  {item.confidence_score}%
                </td>

                <td className="p-3 border">
                  {item.prediction_reason}
                </td>

                <td className="p-3 border">
                  {item.recommendation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
