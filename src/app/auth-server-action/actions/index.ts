'use server';

import createSupabaseServerClient from '@/lib/supabase/server';

export async function signUpWithEmailAndPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email,
    password,
  });

  if (!result.error) {
    const newResult = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return JSON.stringify(newResult);
  }

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
