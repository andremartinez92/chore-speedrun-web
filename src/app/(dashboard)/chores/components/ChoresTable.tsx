'use client';

import {
  GetChoresDocument,
  GetChoresQuery,
  GetChoresQueryVariables,
} from '@/graphql/generated';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useMemo } from 'react';
import ChoreRow from './ChoreRow';

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
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label={props['aria-label']}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last completed</TableCell>
            <TableCell>Recurring days</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell className="invisible">Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((props) => {
            return <ChoreRow key={props.id} {...props} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChoresTable;
