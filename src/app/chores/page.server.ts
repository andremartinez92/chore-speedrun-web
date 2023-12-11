import readUserSession from '@/lib/actions';
import { redirect } from 'next/navigation';

export async function loader() {
  const session = await readUserSession();

  if (!session) {
    return redirect('/auth-server-action');
  }

  return { props: { session } };
}
