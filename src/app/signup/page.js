
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-auth";
import LoadingScreen from "@/components/auth/LoadingScreen";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/verify-email`,
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/verify-email");
  }

  async function handleGoogleSignup() {
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
        subtitle="Creating your account..."
      />
    );
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-white">
          ZDS Secure AI
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Create Account
        </p>

        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

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
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 p-4 font-bold text-white"
          >
            Create Account
          </button>

        </form>

        <button
          onClick={handleGoogleSignup}
          className="w-full mt-4 rounded-xl bg-white text-black font-bold p-4 hover:bg-gray-200"
        >
          Continue with Google
        </button>

        <div className="mt-8 text-center">

          <Link
            href="/login"
            className="text-blue-400 hover:underline"
          >
            Already have an account? Login
          </Link>

        </div>

      </div>

    </main>
  );
}

