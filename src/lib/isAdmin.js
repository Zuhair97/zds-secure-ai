import { supabase } from "@/lib/supabase";

export async function isAdmin() {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return false;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("email", user.email)
      .single();

    if (error || !data) {
      return false;
    }

    return data.role === "admin";
  } catch (error) {
    console.error("Admin check failed:", error);
    return false;
  }
}
