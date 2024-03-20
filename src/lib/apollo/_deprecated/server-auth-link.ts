import createSupabaseServerClient from '@/lib/supabase/server';
import { setContext } from '@apollo/client/link/context';
import { generateHeaders } from '../generate-headers';

export const serverAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseServerClient();
  return generateHeaders(supabase, headers);
});
