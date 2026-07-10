"use client";

import Image from "next/image";
import Link from "next/link";
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
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/3 w-[26rem] h-[26rem] bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#00ffff22 1px, transparent 1px), linear-gradient(90deg,#00ffff22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}

      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-lg rounded-3xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,255,255,.15)] p-10">
