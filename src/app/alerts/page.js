import Navbar from "@/components/Navbar";

export default function AlertsPage() {

  const alerts = [
    {
      title: "Suspicious Login Attempt",
      severity: "High Risk",
      status: "Blocked",
      time: "2 mins ago",
    },

    {
      title: "Phishing Link Detected",
      severity: "Critical",
      status: "Neutralized",
      time: "10 mins ago",
    },

    {
      title: "Wallet Access Request",
      severity: "Medium Risk",
      status: "Monitoring",
      time: "18 mins ago",
    },

    {
      title: "API Intrusion Attempt",
      severity: "Critical",
      status: "Blocked",
      time: "30 mins ago",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Navbar />

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Threat Alerts Center
      </h1>

      <div className="grid gap-6">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="border border-red-500 bg-zinc-900 p-6 rounded-2xl"
          >

            <h2 className="text-2xl font-bold text-red-400 mb-2">
              {alert.title}
            </h2>

            <p className="text-yellow-400 mb-2">
              Severity: {alert.severity}
            </p>

            <p className="text-green-400 mb-2">
              Status: {alert.status}
            </p>

            <p className="text-gray-400">
              Detected: {alert.time}
            </p>

          </div>
        ))}

      </div>

    </main>
  );
}
