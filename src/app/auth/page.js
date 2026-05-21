"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [isLogin, setIsLogin] =
    useState(true);

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.push("/assets");
      }
    }

    checkSession();
  }, [router]);

  async function handleAuth() {
    setMessage("Processing...");

    if (isLogin) {
      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Login successful.");

        router.push("/assets");
      }
    } else {
      const { error } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Signup successful. Check your email."
        );
      }
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Sentinel AI Auth
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl bg-zinc-800"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-xl bg-zinc-800"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl"
          onClick={handleAuth}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <button
          className="w-full mt-4 text-gray-400"
          onClick={() =>
            setIsLogin(!isLogin)
          }
        >
          {isLogin
            ? "Switch to Sign Up"
            : "Switch to Login"}
        </button>

        <p className="mt-4 text-center text-green-400">
          {message}
        </p>

      </div>

    </main>
  );
}
