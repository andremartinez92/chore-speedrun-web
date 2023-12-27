'use server';

import CreateEventForm from '@/features/events/create-event-form';

const Page = () => {
  return (
    <section className="m-20">
      <h1 className="mb-4">Create event</h1>
      <CreateEventForm />
    </section>
  );
};

export default Page;
