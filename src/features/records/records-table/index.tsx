'use client';

import { Record } from '@/graphql/generated';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import RecordRow from './record-row';

type RecordTableData = Pick<Record, 'id' | 'time' | 'created_at'>;
type Props = {
  data: Array<RecordTableData>;
};

const RecordsTable = ({ data }: Props) => {
  const newData = data.map((record) => ({
    ...record,
    createdAt: record.created_at,
  }));

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="Records table">
        <TableHead>
          <TableRow className="min-w-2xl">
            <TableCell>Time</TableCell>
            <TableCell>Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {newData.map((props) => {
            return <RecordRow key={props.id} {...props} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecordsTable;
