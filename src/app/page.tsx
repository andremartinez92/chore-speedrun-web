import { getSessionToken } from '@/lib/supabase/get-session-token';
import createSupabaseServerClient from '@/lib/supabase/server';
import { AUTH_SIGN_IN_ROUTE, CHORES_ROUTE } from '@/routes';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const token = await getSessionToken(supabase);

  if (token) {
    redirect(CHORES_ROUTE);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Chore Speedrun</h1>
      <Link href={{ pathname: AUTH_SIGN_IN_ROUTE }}>Sign in</Link>
    </main>
  );
}
