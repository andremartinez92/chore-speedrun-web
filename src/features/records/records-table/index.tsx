'use client';

import { Record } from '@/graphql/generated';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/features/ui/table';
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
    <Table aria-label="Records table">
      <TableHeader>
        <TableRow className="min-w-2xl">
          <TableHead>Time</TableHead>
          <TableHead>Date</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {newData.map((props) => {
          return <RecordRow key={props.id} {...props} />;
        })}
      </TableBody>
    </Table>
  );
};

export default RecordsTable;
