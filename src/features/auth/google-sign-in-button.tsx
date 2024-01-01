'use client';

import { Button } from '../ui/button';
import { signInWithGoogle } from './helpers';

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
