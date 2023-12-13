'use client';
import { SIGN_IN_ROUTE } from '@/routes';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import SignOutButton from '../SignOutButton';

const AuthActionButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const path = usePathname();

  if (!isLoggedIn && path.startsWith(SIGN_IN_ROUTE)) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <Button href={SIGN_IN_ROUTE} color="inherit">
        Sign in
      </Button>
    );
  }

  return <SignOutButton color="inherit" />;
};

export default AuthActionButton;
