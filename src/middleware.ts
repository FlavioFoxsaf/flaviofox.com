import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  if (hostname.startsWith('bio.')) {
    if (url.pathname === '/') {
      return NextResponse.rewrite(new URL('/bio', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/bio'],
};
