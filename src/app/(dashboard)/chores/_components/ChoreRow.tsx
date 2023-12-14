'use client';

import {
  GetChoresDocument,
  useCompleteChoreMutation,
  useDeleteChoreMutation,
} from '@/graphql/generated';
import { getChoreRoute } from '@/routes';
import { convertToGqlDate } from '@/utils/convertToGqlDate';
import { Launch } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, TableCell, TableRow } from '@mui/material';
import Link from 'next/link';
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
    <TableRow>
      <TableCell>
        <Checkbox
          aria-label={
            isMarkedCompleted
              ? 'Checkbox to mark chore uncompleted'
              : 'Checkbox to mark chore completed'
          }
          checked={isMarkedCompleted}
          disabled={isCompletingChore}
          onChange={(e) => {
            setIsMarkedCompleted(!isMarkedCompleted);
            completeChore({
              variables: {
                choreId: id,
                isCompleted: e.target.checked,
                lastCompletedAt: isMarkedCompleted
                  ? undefined
                  : convertToGqlDate(new Date()),
              },
            });
          }}
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
          color="inherit"
          LinkComponent={Link}
          href={getChoreRoute(id)}
        >
          <Launch />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          color="warning"
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
