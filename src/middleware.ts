// middleware.ts - Using JOSE library for Edge Runtime compatibility
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();

  console.log("Request URL:", url.pathname);

  const publicPaths = ["/login"];
  const publicApiPaths = ["/api/login", "/api/proxy"];

  const isPublicPath = publicPaths.some((path) =>
    url.pathname.startsWith(path)
  );
  const isPublicApi = publicApiPaths.some((path) => url.pathname === path);
  const isPublicRoute = isPublicPath || isPublicApi;

  if (isPublicRoute) {
    console.log("Skipping middleware for public route");
    return NextResponse.next();
  }

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public/images|api/login|api/proxy|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp)).*)",
  ],
};
