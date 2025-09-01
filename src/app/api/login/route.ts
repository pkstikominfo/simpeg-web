import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const res = await fetch(`${process.env.AUTH_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: username,
      password,
      device_name: "-",
      service_name: "SIMPEG-SERVICE",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Login gagal" }, { status: 401 });
  }

  const data = await res.json();

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}
