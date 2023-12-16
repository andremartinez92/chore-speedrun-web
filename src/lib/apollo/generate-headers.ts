import { SupabaseClient } from '@supabase/supabase-js';

export const generateHeaders = async (
  supabase: SupabaseClient,
  headers: Record<string, unknown>
) => {
  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;

  return {
    headers: {
      ...headers,
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
};
