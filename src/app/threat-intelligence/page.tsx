'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';

export default function ThreatIntelligencePage() {
  const supabase = createClient();

  const [threats, setThreats] = useState<any[]>([]);
  const [analysis, setAnalysis] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<string | null>(null);

  async function fetchLiveThreats() {
    const { data, error } = await supabase
      .from('threat_intelligence')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setThreats(data);
    }
  }

  async function analyzeThreat(threatId: string) {
    try {
      setLoading(threatId);

      const response = await fetch(
        '/api/ai/analyze-threat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            threatId,
          }),
        }
      );

      const result = await response.json();

      setAnalysis((prev) => ({
        ...prev,
        [threatId]:
          result.recommendation ||
          'No recommendation available',
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(null);
    }
  }

  useEffect(() => {
    fetchLiveThreats();

    const interval =
      setInterval(fetchLiveThreats, 10000);

    return () => clearInterval(interval);
  }, []);

  function getSeverityColor(
    severity: string
  ) {
    switch (
      severity?.toLowerCase()
    ) {
      case 'critical':
        return 'bg-red-700';

      case 'high':
        return 'bg-red-500';

      case 'medium':
        return 'bg-yellow-500 text-black';

      default:
        return 'bg-green-500 text-black';
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold mb-8">
        ZDS Threat Intelligence Center
      </h1>

      <div className="grid gap-6">
        {threats.map((threat) => (
          <div
            key={threat.id}
            className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {threat.threat_type}
              </h2>

              <span
                className={`px-4 py-2 rounded-full font-bold ${getSeverityColor(
                  threat.severity
                )}`}
              >
                {threat.severity}
              </span>
            </div>

            <p className="mb-2">
              <strong>Source:</strong>{' '}
              {threat.source}
            </p>

            <p className="mb-4">
              {threat.description}
            </p>

            <p className="text-sm text-zinc-400 mb-4">
              {new Date(
                threat.created_at
              ).toLocaleString()}
            </p>

            <button
              onClick={() =>
                analyzeThreat(threat.id)
              }
              className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold"
            >
              {loading === threat.id
                ? 'Analyzing...'
                : 'Analyze Threat'}
            </button>

            {analysis[threat.id] && (
              <div className="mt-4 p-4 rounded-xl bg-black border border-cyan-500">
                <h3 className="font-bold text-cyan-400 mb-2">
                  AI Recommendation
                </h3>

                <p>
                  {analysis[threat.id]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
