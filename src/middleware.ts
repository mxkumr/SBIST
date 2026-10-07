import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isBuiltRoute } from "@/lib/built-routes";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isBuiltRoute(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/under-construction";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
