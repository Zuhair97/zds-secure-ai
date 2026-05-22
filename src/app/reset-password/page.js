"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {

  const router = useRouter();

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  async function handleReset(e) {

    e.preventDefault();

    if (
      password !== confirmPassword
    ) {
      setMessage(
        "Passwords do not match"
      );
      return;
    }

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Password updated successfully"
    );

    setTimeout(() => {
      router.push("/auth");
    }, 2000);
  }

  return (

    <main className="min-h-screen bg-black flex items-center justify-center p-6">

      <form
        onSubmit={handleReset}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-sm"
      >

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800 text-white mb-4 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded"
        >
          Save New Password
        </button>

      </form>

    </main>
  );
}
