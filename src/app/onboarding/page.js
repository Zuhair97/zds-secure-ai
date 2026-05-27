"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function OnboardingPage() {

  const steps = [

    {
      title:
        "Welcome Experience",
      details:
        "Premium animated introduction to ZDS Secure AI ecosystem.",
    },

    {
      title:
        "Language Selection",
      details:
        "Users can choose preferred languages including Hausa and English.",
    },

    {
      title:
        "AI Protection Setup",
      details:
        "Quick activation of intelligent cybersecurity protection systems.",
    },

    {
      title:
        "Dashboard Walkthrough",
      details:
        "Interactive introduction to core security and AI features.",
    },

    {
      title:
        "Threat Awareness",
      details:
        "Educational onboarding about phishing, scams, and cyber threats.",
    },

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-violet-950 text-white p-6">

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
            Premium User Onboarding
          </h1>

          <p className="text-zinc-300 text-lg">
            World-class onboarding and first-time experience for global users.
          </p>

        </div>

        <div className="grid gap-6">

          {steps.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-violet-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-violet-500/10"
            >

              <h2 className="text-3xl font-bold mb-4 text-violet-300">
                {item.title}
              </h2>

              <div className="bg-black/40 rounded-2xl p-5 border border-zinc-800">

                <p className="text-zinc-300 text-lg leading-8">
                  {item.details}
                </p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}
