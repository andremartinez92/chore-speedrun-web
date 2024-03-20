'use client';

import { TableCell, TableRow } from '@/components/table';
import { getChoreRoute } from '@/routes';
import { differenceInDays, parse } from 'date-fns';
import { CheckCircleIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CompleteChoreButton from '../complete-chore-button';
import DeleteChoreButton from '../delete-chore-button';

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
  const lastCompletedAtString = lastCompletedAt
    ? differenceInDays(
        new Date(),
        parse(lastCompletedAt, 'yyyy-MM-dd', new Date())
      )
    : '-';

  return (
    <TableRow>
      <TableCell>
        <div className="flex">
          <CompleteChoreButton
            variant="outline"
            className={isCompleted ? 'text-destructive' : undefined}
            isCompleted={isCompleted}
            choreId={id}
          >
            <CheckCircleIcon className="h-4 w-4" />
          </CompleteChoreButton>
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

      <TableCell>{lastCompletedAtString}</TableCell>

      <TableCell className="hidden lg:table-cell">{recurringDays}</TableCell>

      <TableCell className="hidden lg:table-cell">
        {isPriority ? '*' : '-'}
      </TableCell>

      <TableCell>
        <DeleteChoreButton
          choreId={id}
          name={name}
          className="text-destructive"
          variant="outline"
          size="icon"
        >
          <Trash2Icon className="h-4 w-4" />
        </DeleteChoreButton>
      </TableCell>
    </TableRow>
  );
};

export default ChoreRow;
