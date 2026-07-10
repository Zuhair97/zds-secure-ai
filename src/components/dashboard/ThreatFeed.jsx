"use client";

const threats = [
  {
    level: "CRITICAL",
    message: "Brute-force login blocked",
    country: "Russia",
    color: "bg-red-500",
  },
  {
    level: "HIGH",
    message: "Phishing URL detected",
    country: "China",
    color: "bg-orange-500",
  },
  {
    level: "MEDIUM",
    message: "Suspicious device login",
    country: "Germany",
    color: "bg-yellow-500",
  },
  {
    level: "LOW",
    message: "System scan completed",
    country: "Nigeria",
    color: "bg-green-500",
  },
];

export default function ThreatFeed() {
  return (
    <div className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-6 shadow-lg">

      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Live Threat Feed
      </h2>

      <div className="space-y-3">

        {threats.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4 animate-pulse"
          >

            <div className="flex items-center gap-3">

              <div className={`w-3 h-3 rounded-full ${item.color}`} />

              <div>

                <p className="text-white font-semibold">
                  {item.message}
                </p>

                <p className="text-slate-400 text-sm">
                  {item.country}
                </p>

              </div>

            </div>

            <span className="text-cyan-300 text-sm font-bold">
              {item.level}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
