javascript
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import LoadingScreen from "@/components/auth/LoadingScreen";

export default function AuthGuard({ children }) {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {

    if (!loading && !user) {

      router.replace("/login");

    }

  }, [loading, user, router]);

  if (loading) {

    return (
      <LoadingScreen
        title="ZDS Secure AI"
        subtitle="Checking secure session..."
      />
    );

  }

  if (!user) {

    return null;

  }

  return children;
}

