'use client';

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
import EventRow from './event-row';

type Props = {
  data: Array<{ id: string; name: string }>;
  isLoading: boolean;
};

const EventsTable = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="Events table">
        <TableHead>
          <TableRow className="min-w-2xl">
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((props) => {
            return <EventRow key={props.id} {...props} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsTable;
