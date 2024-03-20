'use client';

import LoadingSpinner from '@/components/loading-spinner';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import dynamic from 'next/dynamic';
import ChoreRow from './chore-row';
import useGetTableData from './use-get-table-data';

type Props = {
  isCompleted: boolean;
  'aria-label': string;
};

const ChoresTable = ({ isCompleted, ...props }: Props) => {
  const { tableData } = useGetTableData({ isCompleted });

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
        {tableData.map(({ data }) => {
          return <ChoreRow key={data.id} data={data} />;
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
