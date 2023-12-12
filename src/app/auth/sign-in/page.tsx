import { readUserSession } from '@/lib/actions/readUserSession';
import { redirect } from 'next/navigation';
import AuthForm from './components/AuthForm';

const Page = async () => {
  const { data } = await readUserSession();
  console.log(data);

  if (data.session) {
    return redirect('/chores');
  }

  return <AuthForm />;
};

export default Page;
