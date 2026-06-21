export default function DeviceTrustCenter() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Device Trust Center
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="border rounded-xl p-4">
          <h2 className="font-semibold">Trusted Devices</h2>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h2 className="font-semibold">Suspicious Devices</h2>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h2 className="font-semibold">Compromised Devices</h2>
          <p className="text-2xl mt-2">0</p>
        </div>

      </div>
    </div>
  );
}
