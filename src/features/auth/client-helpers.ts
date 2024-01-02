'use client';

import createSupabaseBrowserClient from '@/lib/supabase/client';

export async function signInWithGoogle() {
  const supabase = await createSupabaseBrowserClient();
  const result = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${process.env.NEXT_PUBLIC_UI_URL}/auth/callback` },
  });

  return JSON.stringify(result);
}
