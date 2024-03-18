'use client';

import LoadingSpinner from '@/components/loading-spinner';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import { useGetChoresSuspenseQuery } from '@/graphql/generated';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import ChoreRow from './chore-row';

type Props = {
  isCompleted: boolean;
  'aria-label': string;
};

const ChoresTable = ({ isCompleted, ...props }: Props) => {
  const { data } = useGetChoresSuspenseQuery({
    variables: { isCompleted },
    fetchPolicy: 'cache-and-network',
  });

  const tableData = useMemo(() => {
    return (
      data?.choreCollection?.edges.map(({ node }) => ({
        id: node.id,
        recurringDays: node.recurring_days,
        isPriority: node.is_priority,
        isCompleted: node.is_completed,
        lastCompletedAt: node.last_completed_at ?? undefined,
        name: node.name,
      })) || []
    );
  }, [data?.choreCollection]);

  return (
    <Table aria-label={props['aria-label']}>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Days ago</TableHead>
          <TableHead className="hidden lg:table-cell">Recurring days</TableHead>
          <TableHead className="hidden lg:table-cell">Priority</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="overflow-y-scroll max-h-[60dvh]">
        {tableData.map((props) => {
          return <ChoreRow key={props.id} {...props} />;
        })}
      </TableBody>
    </Table>
  );
};

export default dynamic(() => Promise.resolve(ChoresTable), {
  loading: () => (
    <div className="w-full h-full">
      <LoadingSpinner />
    </div>
  ),
  ssr: false,
});
