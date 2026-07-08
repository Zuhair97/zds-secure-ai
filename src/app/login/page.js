
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
      setLoading(false);
      alert(error.message);
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
    <main className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md rounded-3xl bg-zinc-900 shadow-2xl p-8">

        <div className="flex justify-center mb-6">
          <Image
            src="/zds.png"
            alt="ZDS Secure AI"
            width={180}
            height={180}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-white">
          ZDS Secure AI
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Next Generation AI Cybersecurity Platform
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 p-4 font-bold text-white transition"
          >
            Login
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 rounded-xl bg-white hover:bg-gray-200 p-4 font-bold text-black transition"
        >
          Continue with Google
        </button>

        <div className="mt-6 flex flex-col gap-3 text-center text-sm">

          <Link
            href="/signup"
            className="text-blue-400 hover:underline"
          >
            Create Account
          </Link>

          <Link
            href="/forgot-password"
            className="text-blue-400 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

      </div>

    </main>
  );
}



