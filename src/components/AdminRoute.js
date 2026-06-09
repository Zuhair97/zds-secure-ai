"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "@/lib/isAdmin";
import LoadingSpinner from "./LoadingSpinner";

export default function AdminRoute({
  children,
}) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function checkAdmin() {
      const admin = await isAdmin();

      if (!admin) {
        router.replace("/assets");
        return;
      }

      setLoading(false);
    }

    checkAdmin();
  }, [router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return children;
}
