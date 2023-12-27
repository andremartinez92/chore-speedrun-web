'use client';
import { SIGN_IN_ROUTE } from '@/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../button';
import SignOutButton from '../sign-out-button';

const AuthActionButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const path = usePathname();

  if (!isLoggedIn && path.startsWith(SIGN_IN_ROUTE)) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <Button asChild>
        <Link href={SIGN_IN_ROUTE}>Sign in</Link>
      </Button>
    );
  }

  return <SignOutButton color="inherit" />;
};

export default AuthActionButton;
