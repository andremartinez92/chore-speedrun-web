import AuthActionButton from '@/features/auth/auth-action-button';
import { ModeToggle } from '@/features/ui/toggle-theme';
import { readUserSession } from '@/lib/supabase/read-user-session';
import { HOME_ROUTE } from '@/routes';
import Link from 'next/link';
import { NavigationMenu } from '../navigation-menu';

const NavBar = async () => {
  const { data } = await readUserSession();
  const isLoggedIn = Boolean(data.session);

  return (
    <NavigationMenu className="sticky w-screen bg-primary grid grid-cols-3">
      <Link
        href={HOME_ROUTE}
        className="text-lg font-semibold text-primary-foreground justify-self-start"
      >
        Chore Speedrun
      </Link>
      <div className="justify-self-center">
        <ModeToggle />
      </div>
      <AuthActionButton className="justify-self-end" isLoggedIn={isLoggedIn} />
    </NavigationMenu>
  );
};

export default NavBar;
