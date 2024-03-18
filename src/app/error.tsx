'use client';

import { HOME_ROUTE } from '@/routes';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <Link href={HOME_ROUTE}>Go back to homepage</Link>
    </div>
  );
}
