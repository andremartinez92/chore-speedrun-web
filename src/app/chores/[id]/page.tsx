'use client';

import RecordsPage from '@/features/records/records-page';

export default function Page({ params }: { params: { id: string } }) {
  return <RecordsPage choreId={params.id} />;
}
