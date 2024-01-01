'use client';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/features/ui/table';
import {
  GetChoresDocument,
  GetChoresQuery,
  GetChoresQueryVariables,
} from '@/graphql/generated';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useMemo } from 'react';
import ChoreRow from './chore-row';

type Props = {
  isCompleted: boolean;
  'aria-label': string;
};

const ChoresTable = ({ isCompleted, ...props }: Props) => {
  const { data, loading } = useQuery<GetChoresQuery, GetChoresQueryVariables>(
    GetChoresDocument,
    { variables: { isCompleted }, fetchPolicy: 'cache-and-network' }
  );

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

  if (loading) {
    return <div>Loading...</div>;
  }

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

export default ChoresTable;
