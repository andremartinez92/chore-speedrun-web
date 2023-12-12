import { readUserSession } from '@/lib/supabase/readUserSession';
import { CHORES_ROUTE } from '@/routes';
import { redirect } from 'next/navigation';
import AuthForm from './components/AuthForm';

const Page = async () => {
  const { data } = await readUserSession();
  console.log(data);

  if (data.session) {
    return redirect(CHORES_ROUTE);
  }

  return <AuthForm />;
};

export default Page;
