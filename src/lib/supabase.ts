import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ucrtbptjyluwaczevshb.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
