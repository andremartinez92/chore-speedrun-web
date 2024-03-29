'use client';

import { setContext } from '@apollo/client/link/context';
import createSupabaseBrowserClient from '../supabase/client';
import { generateHeaders } from './generate-headers';

export const clientAuthLink = setContext(async (_, { headers }) => {
  const supabase = await createSupabaseBrowserClient();
  return generateHeaders(supabase, headers);
});
