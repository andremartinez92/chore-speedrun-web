import { ModeToggle } from '@/features/ui/toggle-theme';
import { readUserSession } from '@/lib/supabase/read-user-session';
import AuthActionButton from '../auth-action-button';
import { NavigationMenu } from '../navigation-menu';

const NavBar = async () => {
  const { data } = await readUserSession();
  const isLoggedIn = Boolean(data.session);

  return (
    <NavigationMenu className="sticky w-screen bg-primary flex justify-between">
      <div className="text-lg font-semibold text-primary-foreground">
        Chore Speedrun
      </div>
      <ModeToggle />
      <AuthActionButton isLoggedIn={isLoggedIn} />
    </NavigationMenu>
  );
};

export default NavBar;
