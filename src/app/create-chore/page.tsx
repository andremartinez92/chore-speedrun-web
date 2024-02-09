'use server';

import CreateChoreForm from '@/features/chores/create-chore-form';

const Page = () => {
  return (
    <section className="m-20">
      <h1 className="mb-4">Create chore</h1>
      <div className="flex items-center justify-center">
        <CreateChoreForm />
      </div>
    </section>
  );
};

export default Page;
