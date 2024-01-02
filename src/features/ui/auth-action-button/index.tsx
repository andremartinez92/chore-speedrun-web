'use client';
import { SIGN_IN_ROUTE } from '@/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../button';
import SignOutButton from '../sign-out-button';

const AuthActionButton = ({
  isLoggedIn,
  className,
}: {
  isLoggedIn: boolean;
  className?: string;
}) => {
  const path = usePathname();

  if (!isLoggedIn && path.startsWith(SIGN_IN_ROUTE)) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <Button className={className} asChild>
        <Link href={SIGN_IN_ROUTE}>Sign in</Link>
      </Button>
    );
  }

  return <SignOutButton className={className} />;
};

export default AuthActionButton;
