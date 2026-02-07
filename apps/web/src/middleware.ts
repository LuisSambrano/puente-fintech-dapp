import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define routes that require authentication
  // We use startsWith to match /dashboard and any sub-routes
  if (pathname.startsWith("/dashboard")) {
    const privyToken = request.cookies.get("privy-token");
    const privySession = request.cookies.get("privy-session");

    // Check if either token exists. Privy usually sets 'privy-token' or 'privy-session'
    if (!privyToken && !privySession) {
      // User is not authenticated, redirect to login page
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
