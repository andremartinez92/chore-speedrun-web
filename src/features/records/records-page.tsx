'use client';

import { useGetChoreRecordsQuery } from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import { CHORES_ROUTE } from '@/routes';
import { Box, CircularProgress } from '@mui/material';
import { redirect } from 'next/navigation';
import RecordsTable from './records-table';
import Stopwatch from './stopwatch';

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
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (!chore) {
    redirect(CHORES_ROUTE);
  }

  return (
    <section>
      <h1>{choreName}</h1>
      {bestTime && <div>{displayTime(+bestTime)}</div>}
      <Stopwatch choreId={choreId} />
      <RecordsTable data={records} />
    </section>
  );
};

export default RecordsPage;
