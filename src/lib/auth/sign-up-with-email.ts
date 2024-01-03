'use server';

import createSupabaseServerClient from '@/lib/supabase/server';
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
  });

  return JSON.stringify(result);
}
