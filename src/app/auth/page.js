"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLogin, setIsLogin] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  async function handleAuth(e) {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    if (isLogin) {

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {

        await supabase
          .from("login_history")
          .insert([
            {
              user_id: data.user.id,
              email: data.user.email,
              status: "successful",
              device_info:
                navigator.userAgent,
            },
          ]);

        router.push("/security");
      }

    } else {

      const { error } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }

      setMessage(
        "Signup successful. Check your email."
      );
    }

    setLoading(false);
  }

  async function handleForgotPassword() {

    if (!email) {
      setMessage(
        "Enter your email first"
      );
      return;
    }

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            "https://zds-secure-ai.vercel.app/reset-password",
        }
      );

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Password reset email sent."
    );
  }

  return (

    <main className="min-h-screen bg-black flex items-center justify-center p-6">

      <form
        onSubmit={handleAuth}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-sm"
      >

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          ZDS Secure AI
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800 text-white mb-4 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full p-3 rounded bg-zinc-800 text-white mb-4 outline-none"
          required
        />

        {message && (
          <p className="text-blue-400 mb-4 text-sm">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded"
        >

          {loading
            ? "Processing..."
            : isLogin
            ? "Login"
            : "Sign Up"}

        </button>

        <button
          type="button"
          onClick={() =>
            setIsLogin(!isLogin)
          }
          className="w-full mt-4 text-sm text-zinc-400"
        >

          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Login"}

        </button>

        <button
          type="button"
          onClick={
            handleForgotPassword
          }
          className="w-full mt-3 text-blue-400 text-sm"
        >
          Forgot Password?
        </button>

      </form>

    </main>
  );
}








