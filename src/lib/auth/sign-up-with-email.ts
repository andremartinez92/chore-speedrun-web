'use server';

import createSupabaseServerClient from '@/lib/supabase/server';
import { AUTH_LOGIN_ROUTE } from '@/routes';
import { AuthError } from '@supabase/supabase-js';

export async function signUpWithEmail({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  if (password !== confirmPassword) {
    const error = new AuthError('The passwords provided do not match.');
    return JSON.stringify(error);
  }

  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_UI_URL}${AUTH_LOGIN_ROUTE}`,
    },
  });

  return JSON.stringify(result);
}
