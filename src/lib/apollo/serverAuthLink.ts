import { setContext } from '@apollo/client/link/context';
import createSupabaseServerClient from '../supabase/server';
import { generateHeaders } from './generateHeaders';

export const serverAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseServerClient();
  return generateHeaders(supabase, headers);
});
