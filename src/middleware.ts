import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';
import { getSessionToken } from './lib/supabase/get-session-token';
import { AUTH_ROUTE, AUTH_SIGN_IN_ROUTE } from './routes';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Fix bug where CSS styles are not loaded after the redirect
  if (request.nextUrl.pathname.startsWith('/_next')) {
    return response;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
      },
    }
  );

  const token = await getSessionToken(supabase);

  if (!token && !request.nextUrl.pathname.startsWith(AUTH_ROUTE)) {
    return NextResponse.redirect(new URL(AUTH_SIGN_IN_ROUTE, request.url));
  }

  return response;
}
