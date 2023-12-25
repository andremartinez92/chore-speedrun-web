'use server';

import CreateChoreForm from '@/features/chores/create-chore-form';
import { Typography } from '@mui/material';

const Page = () => {
  return (
    <section className="m-20">
      <Typography variant="h1" className="mb-4">
        Create chore
      </Typography>
      <CreateChoreForm />
    </section>
  );
};

export default Page;
