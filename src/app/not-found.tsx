import { Button } from '@/components/button';
import { HOME_ROUTE } from '@/routes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p className="text-lg text-accent-foreground">
        Could not find the requested page.
      </p>
      <Button asChild className="w-[200px]">
        <Link href={HOME_ROUTE}>Return home</Link>
      </Button>
    </>
  );
}
