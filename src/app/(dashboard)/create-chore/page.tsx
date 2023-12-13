'use server';

import CreateChoreForm from './components/CreateChoreForm';

const Page = () => {
  return (
    <section className="m-20">
      <h1 className="mb-4">Create chore</h1>
      <CreateChoreForm />
    </section>
  );
};

export default Page;
