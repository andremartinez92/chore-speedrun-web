'use client';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'id', headerName: 'ID', width: 100 },
];

const EventsTable = ({
  data,
  loading,
}: {
  loading: boolean;
  data: { id: string; name: string }[];
}) => {
  return <DataGrid loading={loading} rows={data} columns={columns} />;
};

export default EventsTable;
