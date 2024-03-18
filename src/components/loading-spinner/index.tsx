import { Loader2Icon } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2Icon className="size-48 stroke-accent-foreground animate-fade-in-spin opacity-0" />
    </div>
  );
};

export default LoadingSpinner;
