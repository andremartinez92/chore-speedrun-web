import AuthTabs from '@/features/auth/auth-tabs';
import GoogleSignInButton from '@/features/auth/google-sign-in-button';
import { readUserSession } from '@/lib/supabase/read-user-session';
import { CHORES_ROUTE } from '@/routes';
import { redirect } from 'next/navigation';

const PAGE_TITLE_ID = 'sign-in-title';

const Page = async () => {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect(CHORES_ROUTE);
  }

  return (
    <section aria-labelledby={PAGE_TITLE_ID} className="mt-8">
      <h1 id={PAGE_TITLE_ID}>Sign In</h1>
      <div className="mt-20 flex flex-col items-center justify-center gap-10">
        <AuthTabs />
        <GoogleSignInButton className="w-48" />
      </div>
    </section>
  );
};

export default Page;
