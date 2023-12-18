'use client';

import { useGetEventRecordsQuery } from '@/graphql/generated';
import { displayTime } from '@/utils/time';
import { Box, CircularProgress } from '@mui/material';
import RecordsTable from './records-table';
import Stopwatch from './stopwatch';

type Props = {
  eventId: string;
};

const RecordsPage = ({ eventId }: Props) => {
  const { data, loading: isLoading } = useGetEventRecordsQuery({
    variables: { eventId },
  });

  const event = data?.eventCollection?.edges[0]?.node;

  const eventName = event?.name;
  const bestTime = event?.recordCollection?.edges?.[0]?.node.time;
  const records = event?.recordCollection?.edges.map((edge) => edge.node) || [];

  if (isLoading && !event) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <section>
      <h1>{eventName}</h1>
      {bestTime && <div>{displayTime(+bestTime)}</div>}
      <Stopwatch eventId={eventId} />;
      <RecordsTable data={records} />
    </section>
  );
};

export default RecordsPage;
