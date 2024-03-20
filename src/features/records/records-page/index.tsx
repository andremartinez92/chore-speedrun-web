'use client';

import LoadingSpinner from '@/components/loading-spinner';
import CompleteChoreButton from '@/features/chores/complete-chore-button';
import { useGetChoreRecordsSuspenseQuery } from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import { CHORES_ROUTE } from '@/routes';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import RecordsTable from '../records-table';
import Stopwatch from '../stopwatch';

type Props = {
  choreId: string;
};

const RecordsPage = ({ choreId }: Props) => {
  const { data } = useGetChoreRecordsSuspenseQuery({
    variables: { choreId },
    fetchPolicy: 'cache-and-network',
  });

  const chore = data?.choreCollection?.edges[0]?.node;

  const choreName = chore?.name;
  const bestTime = chore?.recordCollection?.edges?.[0]?.node.time;
  const records = chore?.recordCollection?.edges.map((edge) => edge.node) || [];

  if (!chore) {
    redirect(CHORES_ROUTE);
  }

  return (
    <section
      aria-labelledby="records-page"
      className="flex flex-col gap-8 mt-8 items-center"
    >
      <h1 id="records-page" className="text-2xl">
        {choreName}
      </h1>
      <div className="text-center">
        Record:
        <div className="text-2xl">
          {bestTime ? displayTime(+bestTime) : '--:--:--'}
        </div>
      </div>

      <Stopwatch choreId={choreId} />
      <CompleteChoreButton
        className="max-w-xs"
        choreId={choreId}
        disabled={chore.is_completed}
        isCompleted={chore.is_completed}
      >
        Complete chore
      </CompleteChoreButton>
      <RecordsTable data={records} />
    </section>
  );
};

export default dynamic(() => Promise.resolve(RecordsPage), {
  loading: () => (
    <div className="w-full h-full">
      <LoadingSpinner />
    </div>
  ),
  ssr: false,
});
