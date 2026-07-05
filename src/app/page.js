"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

export default function HomePage() {

  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {

    if (loading) return;

    if (user) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }

  }, [user, loading, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-bold">
        ZDS Secure AI...
      </h1>
    </main>
  );
}
