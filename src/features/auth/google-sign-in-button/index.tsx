'use client';

import { Button } from '@/features/ui/button';
import { signInWithGoogle } from '@/lib/auth/sign-in-with-google';

const GoogleSignInButton = () => {
  const handleClick = async () => {
    await signInWithGoogle();
  };

  return (
    <Button type="button" onClick={handleClick}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
