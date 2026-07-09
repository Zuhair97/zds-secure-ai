"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  }

  async function handleGoogleLogin() {
    setLoading(true);

    const { error } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });

    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  if (loading) {
    return (
      <LoadingScreen
        title="ZDS Secure AI"
        subtitle="Authenticating..."
      />
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black"></div>

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      </div>

      {/* Login Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-8">

          <div className="flex justify-center">

            <Image
              src="/zds.png"
              alt="ZUHAIR Digital Solutions"
              width={260}
              height={80}
              priority
              className="object-contain"
            />

          </div>

          <h1 className="mt-6 text-center text-3xl font-bold text-white">
            ZDS Secure AI
          </h1>

          <p className="mt-2 text-center text-cyan-300">
            Next Generation AI Cybersecurity Platform
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-cyan-500/20 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-cyan-500/20 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Secure Login
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full rounded-xl border border-white/20 bg-white py-4 font-bold text-black transition hover:bg-gray-200"
            >
              Continue with Google
            </button>

          </form>

          <div className="mt-8 flex items-center justify-between text-sm">

            <Link
              href="/signup"
              className="text-cyan-300 hover:text-cyan-200 hover:underline"
            >
              Create Account
            </Link>

            <Link
              href="/forgot-password"
              className="text-cyan-300 hover:text-cyan-200 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}
