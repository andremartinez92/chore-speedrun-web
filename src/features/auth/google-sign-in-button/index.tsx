'use client';

import { Button } from '@/components/button';
import { signInWithGoogle } from '@/lib/auth/sign-in-with-google';
import { ReactNode } from 'react';

const GoogleSignInButton = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const handleClick = async () => {
    await signInWithGoogle();
  };

  return (
    <Button type="button" onClick={handleClick} className={className}>
      {children || 'Sign in with Google'}
    </Button>
  );
};

export default GoogleSignInButton;
