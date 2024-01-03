'use client';

import { useGetChoreRecordsQuery } from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import { CHORES_ROUTE } from '@/routes';
import { redirect } from 'next/navigation';
import RecordsTable from '../records-table';
import Stopwatch from '../stopwatch';

type Props = {
  choreId: string;
};

const RecordsPage = ({ choreId }: Props) => {
  const { data, loading: isLoading } = useGetChoreRecordsQuery({
    variables: { choreId },
  });

  const chore = data?.choreCollection?.edges[0]?.node;

  const choreName = chore?.name;
  const bestTime = chore?.recordCollection?.edges?.[0]?.node.time;
  const records = chore?.recordCollection?.edges.map((edge) => edge.node) || [];

  if (isLoading && !chore) {
    return <div>Loading...</div>;
  }

  if (!chore) {
    redirect(CHORES_ROUTE);
  }

  return (
    <section
      aria-labelledby="records-page"
      className="flex flex-col gap-4 mt-8"
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
      <RecordsTable data={records} />
    </section>
  );
};

export default RecordsPage;
