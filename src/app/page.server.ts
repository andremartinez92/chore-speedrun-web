import { readUserSession } from '@/lib/actions/readUserSession';
import { SIGN_IN_ROUTE } from '@/routes';
import { redirect } from 'next/navigation';

export async function loader() {
  const session = await readUserSession();

  if (!session) {
    return redirect(SIGN_IN_ROUTE);
  }

  return { props: { session } };
}
