'use server';

import CreateEventForm from './components/CreateEventForm';

const Page = () => {
  return (
    <section className="m-20">
      <h1 className="mb-4">Create chore</h1>
      <CreateEventForm />
    </section>
  );
};

export default Page;
