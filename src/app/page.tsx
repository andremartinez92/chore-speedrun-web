'use client';

import { SIGN_IN_ROUTE } from '@/routes';
import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Typography variant="h1">Chore Speedrun</Typography>
      <Link href={{ pathname: SIGN_IN_ROUTE }}>Sign in</Link>
    </main>
  );
}
