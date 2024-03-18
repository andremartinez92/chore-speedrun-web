import LoadingSpinner from '@/components/loading-spinner';

export default function Loading() {
  return (
    <div className="w-full h-[80%] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
