'use server';

import CreateEventForm from '@/features/events/create-event-form';
import { Typography } from '@mui/material';

const Page = () => {
  return (
    <section className="m-20">
      <Typography variant="h1" className="mb-4">
        Create event
      </Typography>
      <CreateEventForm />
    </section>
  );
};

export default Page;
