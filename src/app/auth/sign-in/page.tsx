import Tabs from '@/components/Tabs';
import { readUserSession } from '@/lib/supabase/readUserSession';
import { CHORES_ROUTE } from '@/routes';
import { redirect } from 'next/navigation';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
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
        <Tabs
          tabsData={[
            {
              label: 'Register',
              tabId: 'register-tab',
              tabPanelId: 'register-tabpanel',
              children: <RegisterForm />,
            },
            {
              label: 'Login',
              tabId: 'login-tab',
              tabPanelId: 'login-tabpanel',
              children: <LoginForm />,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Page;
