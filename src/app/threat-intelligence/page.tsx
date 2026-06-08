'use client';
import { useState, useEffect } from 'react';

export default function ThreatIntelligencePage() {
  const [threats, setThreats] = useState<any[]>([]);

  const fetchThreats = async () => {
    // A nan gaba za mu canza wannan da kiran API na gaske
    console.log("Fetching new threat data...");
    setThreats([
      { id: '1', threat_type: 'Phishing Attempt', source: 'Global Network', created_at: new Date().toISOString() }
    ]);
  };

  useEffect(() => {
    // Kiran farko
    fetchThreats();

    // Sanya Auto-refresh kowane daƙiƙa 30 (30000ms)
    const interval = setInterval(fetchThreats, 30000);

    // Tsaftace lokacin da aka bar shafin
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Live Threat Intelligence (Auto-Refresh)</h1>
      <div className="grid gap-4">
        {threats.map((threat) => (
          <div key={threat.id} className="p-4 border rounded-lg shadow-sm hover:bg-gray-50">
            <h2 className="font-semibold text-red-600">{threat.threat_type}</h2>
            <p className="text-sm text-gray-700">Source: {threat.source}</p>
            <p className="text-xs text-gray-500">Last Updated: {new Date(threat.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
