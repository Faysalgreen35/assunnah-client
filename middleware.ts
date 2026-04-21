import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/wishlist", "/orders", "/profile"];
const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  const isProtected = protectedRoutes.some((r) => pathname.startsWith(r));
  const isAuthRoute = authRoutes.some((r) => pathname.startsWith(r));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/wishlist/:path*", "/orders/:path*", "/profile/:path*", "/login", "/register"],
};
