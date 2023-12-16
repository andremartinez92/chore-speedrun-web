import { SupabaseClient } from '@supabase/supabase-js';

export const getSessionToken = async (supabase: SupabaseClient) => {
  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;
  return token;
};
