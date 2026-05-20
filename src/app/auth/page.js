"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({
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

  async function signIn() {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Login successful.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "320px",
          padding: "24px",
          borderRadius: "12px",
          background: "#111827",
        }}
      >
        <h1>Sentinel AI Auth</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "10px",
          }}
        />

        <button
          onClick={signUp}
          style={{
            width: "100%",
            marginTop: "16px",
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
          }}
        >
          Sign Up
        </button>

        <button
          onClick={signIn}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "10px",
            background: "#059669",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "16px" }}>
          {message}
        </p>
      </div>
    </div>
  );
}
