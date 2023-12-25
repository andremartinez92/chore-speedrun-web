'use client';

import {
  GetEventRecordsDocument,
  useDeleteRecordMutation,
} from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TableCell, TableRow } from '@mui/material';

type RecordRowProps = {
  id: string;
  time: string;
  createdAt: string;
};

const RecordRow = ({ id, time, createdAt }: RecordRowProps) => {
  const [deleteRecord, { loading: isDeletingRecord }] = useDeleteRecordMutation(
    {
      variables: { recordId: id },
      refetchQueries: [GetEventRecordsDocument],
    }
  );

  const timeToDisplay = displayTime(+time);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {timeToDisplay}
      </TableCell>
      <TableCell component="th" scope="row">
        {new Date(createdAt).toLocaleDateString()}
      </TableCell>

      <TableCell>
        <IconButton
          color="warning"
          aria-label={`Delete record ${timeToDisplay}`}
          onClick={() => deleteRecord()}
          disabled={isDeletingRecord}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default RecordRow;
