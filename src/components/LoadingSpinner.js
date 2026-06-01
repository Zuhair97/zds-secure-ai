"use client";

export default function LoadingSpinner() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-slate-950 text-white flex flex-col items-center justify-center">

      <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-8"></div>

      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text mb-4">
        ZDS Secure AI
      </h1>

      <p className="text-zinc-400 text-lg">
        Initializing Secure Session...
      </p>

    </main>
  );
}
