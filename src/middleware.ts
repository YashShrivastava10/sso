import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Create a response object
  const response = NextResponse.next();

  // Get current redirect URL from query parameters if it exists
  const redirectQuery = searchParams.get('redirect');

  // Check if there's a `redirect` query parameter
  if (redirectQuery) {
    // Set or update the `redirect` cookie
    response.cookies.set('redirect', redirectQuery)
  }

  // Retrieve the `redirect` URL from the cookie
  const redirectCookie = request.cookies.get('redirect')?.value;

  // Determine if the current path is public or protected
  const publicPaths = ['/', '/login', '/signup'];
  const isPublicPath = publicPaths.includes(pathname);
  
  // Get session token to check if the user is logged in
  const hasSession = request.cookies.get('authjs.session-token');

  // Handle redirects based on the session and path
  if (isPublicPath && hasSession) {
    // User is logged in and on a public path, redirect to the saved `redirect` URL or default to `/account`
    response.cookies.delete('redirect');
    return NextResponse.redirect(new URL(redirectCookie || '/account', request.url));
  }

  if (!isPublicPath && !hasSession) {
    // User is not logged in and on a protected path, redirect to `/login`
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname === '/') {
    // Redirect root path to `/login`
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Continue with the request if no redirection conditions are met
  return response;
}

export const config = {
  matcher: ['/', '/login', '/signup', '/account'] // Match all routes
};
