'use client';

import {
  GetChoreEventsDocument,
  GetChoreEventsQuery,
  GetChoreEventsQueryVariables,
} from '@/graphql/generated';
import { CHORES_ROUTE, CREATE_EVENT_ROUTE } from '@/routes';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Button } from '@mui/material';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useMemo } from 'react';
import EventsTable from './_components/EventsTable';

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

  if (!data && !loading) {
    redirect(CHORES_ROUTE);
  }

  return (
    <section>
      <h1>{data?.choreCollection?.edges[0]?.node?.name}</h1>
      <EventsTable data={rowData} loading={loading} />
      <Button
        LinkComponent={Link}
        href={CREATE_EVENT_ROUTE}
        variant="contained"
      >
        Add Event
      </Button>
    </section>
  );
}
