"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-auth";
import LoadingScreen from "@/components/auth/LoadingScreen";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
  async function handleGoogleLogin() {

  const { error } = await supabase.auth.signInWithOAuth({

    provider: "google",

    options: {

      redirectTo: `${window.location.origin}/dashboard`

    }

  });

  if (error) {

    alert(error.message);

  }

}
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({

      email,
      password

    });

    setLoading(false);

    if (error) {

      alert(error.message);
      return;

    }

    router.push("/dashboard");

  }

  if (loading) {

    return <LoadingScreen />;

  }

  return (

    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          ZDS Secure AI
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Secure Login
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 p-3 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl p-3 font-bold"
          >
            Login
          </button>
<button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full mt-4 rounded-xl bg-white text-black font-bold p-3 hover:bg-gray-200 transition"
>
  Continue with Google
</button>
        </form>

        <div className="mt-6 text-center">

          <a
            href="/forgot-password"
            className="text-blue-400"
          >
            Forgot Password?
          </a>

        </div>

      </div>

    </main>

  );

}
