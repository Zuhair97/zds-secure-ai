import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/auth/LoadingScreen";
import { useState } from "react";
import { supabase } from "@/lib/supabase-auth";
 "use client";

export default function SignupPage() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {

    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signUp({

      email,

      password,

      options: {

        data: {

          full_name: fullName

        }

      }

    });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;

    }

    router.push("/verify-email");

  }if (loading) {
  return <LoadingScreen />;
}
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          ZDS Secure AI
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Create your secure account
        </p>

        <form
  onSubmit={handleSignup}
  className="space-y-4"
>

          <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e)=>setFullName(e.target.value)}
  className="w-full rounded-xl bg-zinc-800 p-3 outline-none"
/>

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
  disabled={loading}
  className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl p-3 font-bold transition"
>

  {loading ? "Initializing AI Security..." : "Create Account"}

</button>

        </form>

        <div className="mt-6 text-center">

          <p className="text-gray-400">
            Already have an account?
          </p>

          <a
            href="/login"
            className="text-blue-400"
          >
            Login
          </a>

        </div>

      </div>

    </main>
  );
}
