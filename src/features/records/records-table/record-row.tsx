'use client';

import { Button } from '@/features/ui/button';
import { TableCell, TableRow } from '@/features/ui/table';
import {
  GetChoreRecordsDocument,
  useDeleteRecordMutation,
} from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import { Trash2 } from 'lucide-react';

type RecordRowProps = {
  id: string;
  time: string;
  createdAt: string;
};

const RecordRow = ({ id, time, createdAt }: RecordRowProps) => {
  const [deleteRecord, { loading: isDeletingRecord }] = useDeleteRecordMutation(
    {
      variables: { recordId: id },
      refetchQueries: [GetChoreRecordsDocument],
    }
  );

  const timeToDisplay = displayTime(+time);

  return (
    <TableRow>
      <TableCell>{timeToDisplay}</TableCell>
      <TableCell>{new Date(createdAt).toLocaleDateString('pt-PT')}</TableCell>

      <TableCell>
        <Button
          className="text-destructive"
          variant="outline"
          size="icon"
          aria-label={`Delete record ${timeToDisplay}`}
          onClick={() => deleteRecord()}
          disabled={isDeletingRecord}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default RecordRow;
