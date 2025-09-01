import { fetchWithAuth } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { endpoint, options } = await req.json();

  try {
    const data = await fetchWithAuth(endpoint, options);

    return NextResponse.json(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
}
