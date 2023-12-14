'use client';

import {
  GetChoresDocument,
  useCompleteChoreMutation,
  useDeleteChoreMutation,
} from '@/graphql/generated';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

type ChoreRowProps = {
  id: string;
  name: string;
  recurringDays: number;
  isPriority: boolean;
  lastCompletedAt?: string;
  isCompleted: boolean;
};

const ChoreRow = ({
  id,
  name,
  recurringDays,
  isPriority,
  lastCompletedAt = '',
  isCompleted,
}: ChoreRowProps) => {
  const [isMarkedCompleted, setIsMarkedCompleted] = useState(isCompleted);
  const [deleteChore, { loading: isDeletingChore }] = useDeleteChoreMutation({
    variables: { choreId: id },
    refetchQueries: [GetChoresDocument],
  });
  const [completeChore, { loading: isCompletingChore }] =
    useCompleteChoreMutation({
      refetchQueries: [GetChoresDocument],
      onCompleted: (result) => {
        const { records } = result.updateChoreCollection;
        setIsMarkedCompleted(records[0].is_completed);
      },
    });

  return (
    <TableRow key={id}>
      <TableCell>
        <Checkbox
          aria-label={
            isMarkedCompleted
              ? 'Checkbox to mark chore uncompleted'
              : 'Checkbox to mark chore completed'
          }
          checked={isMarkedCompleted}
          disabled={isCompletingChore}
          onChange={(e) =>
            completeChore({
              variables: {
                choreId: id,
                isCompleted: e.target.checked,
                // lastCompletedAt: Date.now().toString(),
              },
            })
          }
        />
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>{lastCompletedAt}</TableCell>
      <TableCell>{recurringDays}</TableCell>
      <TableCell>{isPriority ? '*' : '-'}</TableCell>
      <TableCell>
        <IconButton
          aria-label={`Delete chore ${name}`}
          onClick={() => deleteChore()}
          disabled={isDeletingChore}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ChoreRow;
