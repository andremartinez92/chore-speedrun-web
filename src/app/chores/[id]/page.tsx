'use client';

import EventsTable from '@/features/events/events-table';
import { Button } from '@/features/ui/button';
import {
  GetChoreEventsDocument,
  GetChoreEventsQuery,
  GetChoreEventsQueryVariables,
} from '@/graphql/generated';
import { CHORES_ROUTE, getCreateEventRoute } from '@/routes';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useMemo } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const { data, loading: isLoading } = useQuery<
    GetChoreEventsQuery,
    GetChoreEventsQueryVariables
  >(GetChoreEventsDocument, { variables: { choreId: params.id } });

  const events = data?.choreCollection?.edges[0]?.node?.eventCollection?.edges;
  const tableData = useMemo(() => {
    return (
      events?.map(({ node }) => ({
        id: node.id,
        name: node.name,
      })) || []
    );
  }, [events]);

  if (!data?.choreCollection?.edges[0]?.node && !isLoading) {
    redirect(CHORES_ROUTE);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const name = data?.choreCollection?.edges[0].node.name || '';

  return (
    <section>
      <h1>{name}</h1>
      <EventsTable data={tableData} isLoading={isLoading} />
      <Button asChild>
        <Link href={getCreateEventRoute({ choreId: params.id })}>
          Add Event
        </Link>
      </Button>
    </section>
  );
}
