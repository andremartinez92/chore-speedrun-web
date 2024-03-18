'use client';

import ErrorComponent, {
  ErrorComponentProps,
} from '@/features/ui/error-component';

export default function GlobalError({ error, reset }: ErrorComponentProps) {
  return (
    <html>
      <body>
        <ErrorComponent error={error} reset={reset} />
      </body>
    </html>
  );
}
