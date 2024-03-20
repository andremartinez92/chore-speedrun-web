'use client';

import { TableCell, TableRow } from '@/components/table';
import { getChoreRoute } from '@/routes';
import { differenceInDays, parse } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChoreCompleteCheckbox from './chore-complete-checkbox';
import ChoreDeleteButton from './chore-delete-button';

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
          <ChoreCompleteCheckbox isCompleted={isCompleted} id={id} />
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
        <ChoreDeleteButton id={id} name={name} />
      </TableCell>
    </TableRow>
  );
};

export default ChoreRow;
