'use client';

import {
  GetChoreEventsDocument,
  useDeleteEventMutation,
} from '@/graphql/generated';
import { getEventRoute } from '@/routes';
import { Launch } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TableCell, TableRow } from '@mui/material';
import Link from 'next/link';

type EventRowProps = {
  id: string;
  name: string;
};

const EventRow = ({ id, name }: EventRowProps) => {
  const [deleteEvent, { loading: isDeletingEvent }] = useDeleteEventMutation({
    variables: { eventId: id },
    refetchQueries: [GetChoreEventsDocument],
  });

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>
        <IconButton
          color="inherit"
          LinkComponent={Link}
          href={getEventRoute(id)}
        >
          <Launch />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          color="warning"
          aria-label={`Delete event ${name}`}
          onClick={() => deleteEvent()}
          disabled={isDeletingEvent}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default EventRow;
