"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlerLogin = () => {
    console.log("Data login:", form);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white font-sans">
      <div className="w-full max-w-sm p-8 bg-neutral-900 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md border border-neutral-700 bg-black text-white placeholder-neutral-400
                     transition-colors duration-300 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md border border-neutral-700 bg-black text-white placeholder-neutral-400
                     transition-colors duration-300 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
        />

        {/* Tombol Login */}
        <button
          onClick={handlerLogin}
          className="w-full bg-white text-black font-semibold py-3 rounded-md 
                     transition-colors duration-300 hover:bg-neutral-200"
        >
          Login
        </button>

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
