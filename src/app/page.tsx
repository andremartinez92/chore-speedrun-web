'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Supabase Auth + Storage</h1>
      <Link href={{ pathname: '/auth-server-action' }}>Server action</Link>
    </main>
  );
}
