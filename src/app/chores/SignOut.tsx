'use client';

import createSupabaseBrowserClient from '@/lib/supabase/client';
import { SIGN_IN_ROUTE } from '@/routes';
import { useRouter } from 'next/navigation';

const SignOut = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = await createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push(SIGN_IN_ROUTE);
  };

  return <button onClick={handleLogout}>Sign out</button>;
};

export default SignOut;
