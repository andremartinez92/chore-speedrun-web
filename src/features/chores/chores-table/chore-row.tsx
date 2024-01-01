'use client';

import { Button } from '@/features/ui/button';
import { Checkbox } from '@/features/ui/checkbox';
import { TableCell, TableRow } from '@/features/ui/table';
import {
  GetChoresDocument,
  useCompleteChoreMutation,
  useDeleteChoreMutation,
} from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';
import { getChoreRoute } from '@/routes';
import { parse } from 'date-fns';
import differenceInDays from 'date-fns/differenceInDays';
import { ExternalLink, Trash2 } from 'lucide-react';
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
          onCheckedChange={(checked) => {
            setIsMarkedCompleted(!isMarkedCompleted);
            void completeChore({
              variables: {
                choreId: id,
                isCompleted: checked === true, // checked can be 'indeterminate'
                lastCompletedAt: isMarkedCompleted
                  ? undefined
                  : convertToGqlDate(new Date()),
              },
            });
          }}
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        {lastCompletedAt
          ? differenceInDays(
              new Date(),
              parse(lastCompletedAt, 'yyyy-MM-dd', new Date())
            )
          : '-'}
      </TableCell>
      <TableCell className="hidden lg:block">{recurringDays}</TableCell>
      <TableCell className="hidden lg:block">
        {isPriority ? '*' : '-'}
      </TableCell>
      <TableCell>
        <Button size="icon" variant="outline" asChild>
          <Link href={getChoreRoute(id)}>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          className="text-destructive"
          variant="outline"
          size="icon"
          aria-label={`Delete chore ${name}`}
          onClick={() => deleteChore()}
          disabled={isDeletingChore}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ChoreRow;
