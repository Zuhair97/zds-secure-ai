export default function Navbar() {
  return (
    <nav className="flex gap-4 mb-8 border border-cyan-500 p-4 rounded-2xl bg-zinc-900">

      <button className="text-cyan-400 font-bold">
        Dashboard
      </button>

      <button className="text-gray-400">
        Assets
      </button>

      <button className="text-gray-400">
        Wallets
      </button>

      <button className="text-gray-400">
        Alerts
      </button>

      <button className="text-gray-400">
        AI Agent
      </button>

    </nav>
  );
}
