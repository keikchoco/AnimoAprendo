import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/(.*)",
  "/search(.*)",
]);

const isDefaultRoute = createRouteMatcher(["/"]);
const isTestingRoute = createRouteMatcher(["/testing(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, userId } = await auth();
  const metadata = sessionClaims?.publicMetadata as
    | { role?: string; isAdmin?: boolean; onboarded?: boolean }
    | undefined;

  // If user is logged in and not onboarded
  if (
    (isPublicRoute(req) || isDefaultRoute(req)) &&
    metadata?.onboarded === false &&
    userId
  ) {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  } else if (metadata?.onboarded === true) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If accessing testing routes on production, return to home
  if (isTestingRoute(req)) {
    if (process.env.NEXT_PUBLIC_DEVELOPMENT_MODE !== "true") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // If the user is logged in and trying to access a public route, redirect them to their dashboard/home page
  if (isPublicRoute(req) && userId) {
    if (metadata?.isAdmin == true) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    if (metadata?.role === "tutee" && !metadata?.isAdmin) {
      return NextResponse.redirect(new URL("/tutee/home", req.url));
    }
    if (metadata?.role === "tutor" && !metadata?.isAdmin) {
      return NextResponse.redirect(new URL("/tutor/dashboard", req.url));
    }
  }

  // If the user is not logged in and trying to access a protected route, redirect them to the sign-in page
  if (!isPublicRoute(req) && !userId && !isDefaultRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If the user is logged in and trying to access the sign-in or sign-up page, redirect them to their dashboard/home page
  if (isDefaultRoute(req) && userId) {
    if (metadata?.isAdmin == true) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    if (metadata?.role === "tutee" && !metadata?.isAdmin) {
      return NextResponse.redirect(new URL("/tutee/home", req.url));
    }
    if (metadata?.role === "tutor" && !metadata?.isAdmin) {
      return NextResponse.redirect(new URL("/tutor/dashboard", req.url));
    }
  }

  // For all other cases, allow the request to proceed
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
