/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/uploads')) {
    return NextResponse.rewrite(
      new URL(`/api${request.nextUrl.pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ['/uploads/:path*'],
};