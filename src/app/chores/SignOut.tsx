import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

const logout = async () => {
  'use server';
  console.log('logout');
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/auth-server-action');
};

const SignOut = () => {
  return (
    // @ts-expect-error wut
    <form action={logout}>
      <button>Sign out</button>
    </form>
  );
};

export default SignOut;
