'use client';

import { useCreateChoreMutation } from '@/graphql/generated';
import { FormEvent, useState } from 'react';

const CreateForm = () => {
  const [createChore] = useCreateChoreMutation({
    onCompleted: () => console.log('created'),
    onError: (e) => {
      console.log(e);
    },
  });

  const [name, setName] = useState('');
  const [recurringDays, setRecurringDays] = useState(0);
  const [isPriority, setIsPriority] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void createChore({
      variables: {
        name,
        recurringDays,
        isPriority,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Recurring days
        <input
          value={recurringDays}
          onChange={(e) => setRecurringDays(Number(e.target.value))}
        />
      </label>
      <label>
        Is Priority
        <input
          type="checkbox"
          checked={isPriority}
          onChange={(e) => setIsPriority(e.target.checked)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default CreateForm;
