'use client';

import { SIGN_IN_ROUTE } from '@/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Chore Speedrun</h1>
      <Link href={{ pathname: SIGN_IN_ROUTE }}>Sign in</Link>
    </main>
  );
}
