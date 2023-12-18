import { readUserSession } from '@/lib/supabase/read-user-session';
import { AppBar, Box, Toolbar } from '@mui/material';
import AuthActionButton from './auth-action-button';

const NavBar = async () => {
  const { data } = await readUserSession();
  const isLoggedIn = Boolean(data.session);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="flex justify-between">
          Chore Speedrun
          <AuthActionButton isLoggedIn={isLoggedIn} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
