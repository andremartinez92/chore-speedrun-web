import AuthTabs from '@/features/auth/auth-tabs';
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
      <h1 id={PAGE_TITLE_ID} className="text-5xl text-center">
        Sign In
      </h1>
      <div className="mt-20 flex gap-72 items-center justify-center">
        <AuthTabs />
      </div>
    </section>
  );
};

export default Page;
