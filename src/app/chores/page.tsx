import readUserSession from '@/lib/actions';
import { redirect } from 'next/navigation';
import SignOut from './SignOut';

const Chores = async () => {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect('/auth-server-action');
  }

  return (
    <div>
      Hello authed
      <SignOut />
    </div>
  );
};

export default Chores;
