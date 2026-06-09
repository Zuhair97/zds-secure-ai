'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';

export default function ThreatIntelligencePage() {
  const [threats, setThreats] = useState<any[]>([]);
  const supabase = createClient();

  const fetchLiveThreats = async () => {
    const { data, error } = await supabase
      .from('threat_intelligence')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setThreats(data);
  };

  useEffect(() => {
    fetchLiveThreats();
    const interval = setInterval(fetchLiveThreats, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">ZDS Secure AI: Live Threat Intel</h1>
      <div className="grid gap-4">
        {threats.map((threat) => (
          <div key={threat.id} className="p-4 border border-red-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-red-600">{threat.threat_type}</h2>
            <p className="text-sm">Severity: {threat.severity}</p>
            <p className="text-xs text-gray-500">Detected: {new Date(threat.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
