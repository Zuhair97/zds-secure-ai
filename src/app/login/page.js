"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-auth";
import LoadingScreen from "@/components/auth/LoadingScreen";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  async function handleGoogleLogin() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-10 -left-20" />

      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse bottom-0 right-0" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-bounce top-20 left-16"></div>
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping top-40 right-20"></div>
        <div className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-bounce bottom-32 left-1/3"></div>
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping bottom-20 right-1/4"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-cyan-500/30 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,.15)] p-10">

        <div className="flex justify-center mb-6">
          <Image
            src="/zds.png"
            alt="ZUHAIR Digital Solutions"
            width={300}
            height={90}
            priority
          />
        </div>

        <h1 className="text-4xl font-extrabold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-cyan-300 mt-3 mb-8">
          Next Generation AI Cybersecurity Platform
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white focus:border-cyan-400 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white focus:border-cyan-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 transition py-4 font-bold text-slate-950"
          >
            Login
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition py-4 font-semibold text-white"
        >
          Continue with Google
        </button>

        <div className="mt-8 flex justify-between text-sm">

          <Link
            href="/signup"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Create Account
          </Link>

          <Link
            href="/forgot-password"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Forgot Password?
          </Link>

        </div>

      </div>

    </main>
  );
}
