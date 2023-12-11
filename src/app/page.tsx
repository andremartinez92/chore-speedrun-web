'use client';

import { useGetProfilesQuery } from '@/graphql/generated';
import AuthForm from './AuthForm';

export default function Home() {
  const { data } = useGetProfilesQuery();
  console.log('data', data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Supabase Auth + Storage</h1>
      <AuthForm />
    </main>
  );
}
