import readUserSession from '@/lib/actions';
import { redirect } from 'next/navigation';
import RegisterForm from './components/RegisterForm';
import SignIn from './components/SignIn';

const Page = async () => {
  const { data } = await readUserSession();

  console.log(data);

  if (data.session) {
    return redirect('/chores');
  }

  return (
    <div>
      Register
      <RegisterForm />
      Sign in
      <SignIn />
    </div>
  );
};

export default Page;
