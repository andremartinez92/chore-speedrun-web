'use client';

import createSupabaseClientClient from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const SignOut = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = await createSupabaseClientClient();
    await supabase.auth.signOut();
    router.push('/auth-server-action');
  };

  return <button onClick={handleLogout}>Sign out</button>;
};

export default SignOut;
