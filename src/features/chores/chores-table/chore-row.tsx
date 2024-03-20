'use client';

import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import { TableCell, TableRow } from '@/components/table';
import {
  GetChoresDocument,
  useCompleteChoreMutation,
  useDeleteChoreMutation,
} from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';
import { getChoreRoute } from '@/routes';
import { differenceInDays, parse } from 'date-fns';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type ChoreRowProps = {
  data: {
    id: string;
    name: string;
    recurringDays: number;
    isPriority: boolean;
    lastCompletedAt?: string;
    isCompleted: boolean;
  };
};

const ChoreRow = ({ data }: ChoreRowProps) => {
  const {
    id,
    name,
    recurringDays,
    isPriority,
    lastCompletedAt = '',
    isCompleted,
  } = data;

  const { push } = useRouter();
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
        <div className="flex">
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
        </div>
      </TableCell>
      <TableCell
        className="cursor-pointer"
        onClick={() => push(getChoreRoute(id))}
      >
        <Link href={getChoreRoute(id)} onClick={(e) => e.stopPropagation()}>
          {name}
        </Link>
      </TableCell>
      <TableCell>
        {lastCompletedAt
          ? differenceInDays(
              new Date(),
              parse(lastCompletedAt, 'yyyy-MM-dd', new Date())
            )
          : '-'}
      </TableCell>
      <TableCell className="hidden lg:table-cell">{recurringDays}</TableCell>
      <TableCell className="hidden lg:table-cell">
        {isPriority ? '*' : '-'}
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
