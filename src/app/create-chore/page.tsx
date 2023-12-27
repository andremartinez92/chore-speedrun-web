'use server';

import CreateChoreForm from '@/features/chores/create-chore-form';

const Page = () => {
  return (
    <section className="m-20">
      <h1 className="mb-4">Create chore</h1>
      <CreateChoreForm />
    </section>
  );
};

export default Page;
