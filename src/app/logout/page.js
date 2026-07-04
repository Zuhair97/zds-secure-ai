javascript
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-auth";
import LoadingScreen from "@/components/auth/LoadingScreen";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      await supabase.auth.signOut();

      router.replace("/login");
    }

    logout();
  }, [router]);

  return (
    <LoadingScreen
      title="ZDS Secure AI"
      subtitle="Signing you out securely..."
    />
  );
}

