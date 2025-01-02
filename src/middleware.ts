import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//we can pass as many routes as we wan in the array
const isRouteProteced = createRouteMatcher(["/mock-users"])

export default clerkMiddleware(async (auth, req) => {
    if(isRouteProteced(req)) await auth.protect()

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};