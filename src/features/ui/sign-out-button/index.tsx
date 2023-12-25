'use client';

import { Button, ButtonProps } from '@/features/ui/button';
import createSupabaseBrowserClient from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

type Props = Omit<ButtonProps, 'onClick'>;

const SignOutButton = (props: Props) => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = await createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Button {...props} onClick={handleLogout}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
