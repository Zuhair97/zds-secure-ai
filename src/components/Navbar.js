import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 mb-8 border border-cyan-500 bg-zinc-900 p-4 rounded-2xl overflow-x-auto">

      <Link
        href="/"
        className="text-cyan-400 font-bold whitespace-nowrap"
      >
        Dashboard
      </Link>

      <Link
        href="/assets"
        className="text-gray-400 whitespace-nowrap"
      >
        Assets
      </Link>

      <Link
        href="/wallets"
        className="text-gray-400 whitespace-nowrap"
      >
        Wallets
      </Link>

      <Link
        href="/alerts"
        className="text-gray-400 whitespace-nowrap"
      >
        Alerts
      </Link>

      <Link
        href="/ai-agent"
        className="text-gray-400 whitespace-nowrap"
      >
        AI Agent
      </Link>

    </nav>
  );
}

