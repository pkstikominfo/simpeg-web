"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/common/spinner";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!res.ok) {
        let data;
        try {
          data = await res.json();
        } catch {
          throw new Error("Server tidak mengembalikan data valid");
        }
        throw new Error(data.error || "Login gagal");
      }
      router.push("/master/dashboard");
      router.refresh();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white font-sans">
      <div className="w-full max-w-sm p-8 bg-neutral-900 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="p-6 border rounded shadow w-80 space-y-3"
        >
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-md border border-neutral-700 bg-black text-white placeholder-neutral-400
                     transition-colors duration-300 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded-md border border-neutral-700 bg-black text-white placeholder-neutral-400
                     transition-colors duration-300 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
          />
          {error && <p className="text-red-500">{error}</p>}
          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md 
                     transition-colors duration-300 hover:bg-neutral-200"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
        </form>
        {/* Link Register */}
        <p className="text-neutral-400 text-sm text-center mt-6">
          Belum punya akun ?{" "}
          <Link
            href="https://boltara.dqi.my.id/sso-frontend/register-user"
            className="text-white hover:underline"
          >
            Daftar disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
