import LoginForm from '@/features/auth/login-form';
import RegisterForm from '@/features/auth/register-form';
import Tabs from '@/features/ui/tabs';
import { readUserSession } from '@/lib/supabase/read-user-session';
import { CHORES_ROUTE } from '@/routes';
import { Typography } from '@mui/material';
import { redirect } from 'next/navigation';

const PAGE_TITLE_ID = 'sign-in-title';

const Page = async () => {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect(CHORES_ROUTE);
  }

  return (
    <section aria-labelledby={PAGE_TITLE_ID} className="mt-8">
      <Typography
        variant="h1"
        id={PAGE_TITLE_ID}
        className="text-5xl text-center"
      >
        Sign In
      </Typography>
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
