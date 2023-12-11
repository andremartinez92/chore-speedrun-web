import { setContext } from '@apollo/client/link/context';
import createSupabaseClientClient from '../supabase/client';
import createSupabaseServerClient from '../supabase/server';

export const serverAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseServerClient();

  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;

  return {
    headers: {
      ...headers,

      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const clientAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseClientClient();

  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;

  return {
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'authorization, x-client-info, apikey, content-type',
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});
