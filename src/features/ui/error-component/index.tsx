'use client';

import { Button } from '@/components/button';
import { HOME_ROUTE } from '@/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export type ErrorComponentProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorComponent = ({ reset, error }: ErrorComponentProps) => {
  const { push } = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-16">
      <h1>Something went wrong!</h1>
      <Button className="w-[200px]" onClick={() => reset()}>
        Try again
      </Button>
      <Button onClick={() => push(HOME_ROUTE)}>Go back home</Button>
    </div>
  );
};

export default ErrorComponent;
