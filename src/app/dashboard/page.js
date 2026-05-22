"use client";

import Link from "next/link";

export default function DashboardPage() {

  const cards = [
    {
      title: "Assets",
      description:
        "Monitor digital assets and infrastructure.",
      link: "/assets",
    },

    {
      title: "Wallets",
      description:
        "Track crypto wallet activities and risks.",
      link: "/wallets",
    },

    {
      title: "Alerts",
      description:
        "View security alerts and suspicious events.",
      link: "/alerts",
    },

    {
      title: "AI Agent",
      description:
        "AI-powered security assistant and analysis.",
      link: "/ai-agent",
    },

    {
      title: "Security Activity",
      description:
        "Monitor login history and user activities.",
      link: "/security",
    },
  ];

  return (

    <main className="min-h-screen bg-black text-white flex">

      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-6 hidden md:block">

        <h1 className="text-2xl font-bold mb-10">
          ZDS Secure AI
        </h1>

        <nav className="flex flex-col gap-4">

          <Link
            href="/dashboard"
            className="text-zinc-300 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/assets"
            className="text-zinc-300 hover:text-white"
          >
            Assets
          </Link>

          <Link
            href="/wallets"
            className="text-zinc-300 hover:text-white"
          >
            Wallets
          </Link>

          <Link
            href="/alerts"
            className="text-zinc-300 hover:text-white"
          >
            Alerts
          </Link>

          <Link
            href="/ai-agent"
            className="text-zinc-300 hover:text-white"
          >
            AI Agent
          </Link>

          <Link
            href="/security"
            className="text-zinc-300 hover:text-white"
          >
            Security Activity
          </Link>

        </nav>

      </aside>

      <section className="flex-1 p-6">

        <h1 className="text-5xl font-bold mb-4">
          Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Welcome to ZDS Secure AI Cybersecurity Platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card) => (

            <Link
              key={card.title}
              href={card.link}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >

              <h2 className="text-2xl font-bold mb-3">
                {card.title}
              </h2>

              <p className="text-zinc-400">
                {card.description}
              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
