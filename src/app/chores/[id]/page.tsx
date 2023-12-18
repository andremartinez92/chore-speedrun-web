'use client';

import EventsTable from '@/features/events/events-table';
import {
  GetChoreEventsDocument,
  GetChoreEventsQuery,
  GetChoreEventsQueryVariables,
} from '@/graphql/generated';
import { CHORES_ROUTE, getCreateEventRoute } from '@/routes';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Button } from '@mui/material';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useMemo } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const { data, loading } = useQuery<
    GetChoreEventsQuery,
    GetChoreEventsQueryVariables
  >(GetChoreEventsDocument, { variables: { choreId: params.id } });

  const rowData = useMemo(() => {
    return (
      data?.choreCollection?.edges[0]?.node?.eventCollection?.edges.map(
        ({ node }) => ({
          id: node.id,
          name: node.name,
        })
      ) || []
    );
  }, [data]);

  if (!data?.choreCollection?.edges[0]?.node && !loading) {
    redirect(CHORES_ROUTE);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const name = data?.choreCollection?.edges[0].node.name || '';

  return (
    <section>
      <h1>{name}</h1>
      <EventsTable data={rowData} loading={loading} />
      <Button
        LinkComponent={Link}
        href={getCreateEventRoute({ choreId: params.id, choreName: name })}
        variant="contained"
      >
        Add Event
      </Button>
    </section>
  );
}
