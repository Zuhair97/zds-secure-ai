
"use client";

import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8 text-center">

        <div className="text-6xl mb-6">
          📧
        </div>

        <h1 className="text-3xl font-bold text-white">
          Verify Your Email
        </h1>

        <p className="text-gray-400 mt-6 leading-7">
          ZDS Secure AI has sent a verification link to your email address.
        </p>

        <p className="text-gray-500 mt-4 text-sm">
          Open your inbox and click the verification link before logging in.
        </p>

        <Link
          href="/login"
          className="block mt-10 w-full rounded-xl bg-blue-600 hover:bg-blue-700 p-4 text-white font-bold transition"
        >
          Back to Login
        </Link>

      </div>

    </main>
  );
}

