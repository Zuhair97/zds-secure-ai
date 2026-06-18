export default function EnterpriseDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        ZDS Secure AI Enterprise Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border rounded-lg p-4">
          <h2 className="font-bold">Risk Engine</h2>
          <p>Real-time user risk monitoring</p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-bold">Threat Intelligence</h2>
          <p>Global threat visibility</p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-bold">SOC Automation</h2>
          <p>Automated incident response</p>
        </div>

      </div>
    </div>
  );
}
