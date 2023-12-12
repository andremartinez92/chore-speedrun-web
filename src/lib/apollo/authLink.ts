import { setContext } from '@apollo/client/link/context';
import { SupabaseClient } from '@supabase/supabase-js';
import createSupabaseBrowserClient from '../supabase/client';
import createSupabaseServerClient from '../supabase/server';

const generateHeaders = async (
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

export const serverAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseServerClient();
  return generateHeaders(supabase, headers);
});

export const clientAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseBrowserClient();
  return generateHeaders(supabase, headers);
});
