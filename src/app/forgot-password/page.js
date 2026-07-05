
"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase-auth";
import LoadingScreen from "@/components/auth/LoadingScreen";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleReset(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSent(true);
  }

  if (loading) {
    return (
      <LoadingScreen
        title="ZDS Secure AI"
        subtitle="Sending reset email..."
      />
    );
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-white">
          Reset Password
        </h1>

        {!sent ? (
          <form onSubmit={handleReset} className="space-y-4 mt-8">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 p-4 text-white font-bold"
            >
              Send Reset Link
            </button>

          </form>
        ) : (
          <div className="text-center mt-8 text-green-400">
            Password reset email has been sent successfully.
          </div>
        )}

        <div className="mt-8 text-center">

          <Link
            href="/login"
            className="text-blue-400 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </main>
  );
}

