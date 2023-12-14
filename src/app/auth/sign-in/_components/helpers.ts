'use server';

import createSupabaseServerClient from '@/lib/supabase/server';
import { AuthError } from '@supabase/supabase-js';

export async function signUpWithEmailAndPassword({
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

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}
