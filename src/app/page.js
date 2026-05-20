"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/AuthProvider";

export default function HomePage() {
  const { session, loading } =
    useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        router.push("/auth");
      } else {
        router.push("/assets");
      }
    }
  }, [session, loading, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-bold">
        Loading Sentinel AI...
      </h1>
    </main>
  );
}
