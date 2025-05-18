import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isSignInOrSignUp = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  // Only run redirects on sign-in or sign-up routes
  if (isSignInOrSignUp(req)) {
    await auth.protect()
    const { sessionClaims } = await auth()
    const metadata = sessionClaims?.publicMetadata as { role?: string, isAdmin?: boolean } | undefined

    if (metadata?.isAdmin === true) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
    if (metadata?.role === 'tutee' && !metadata?.isAdmin) {
      return NextResponse.redirect(new URL('/tutee/home', req.url))
    }
    if (metadata?.role === 'tutor' && !metadata?.isAdmin) {
      return NextResponse.redirect(new URL('/tutor/dashboard', req.url))
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}