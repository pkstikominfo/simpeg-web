"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Logout gagal");
      }

      // redirect ke login
      router.replace("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Logout error");
      } else {
        setError("Logout error");
      }
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
}
