'use client';

import { useCreateEventMutation } from '@/graphql/generated';
import { EVENT_ROUTE } from '@/routes';
import { createInputErrorProps } from '@/utils/create-input-error-props';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

enum FormField {
  name = 'name',
  choreId = 'choreId',
}

const validationSchema = z.object({
  [FormField.name]: z.string().min(1, { message: 'Name is required.' }).trim(),
  [FormField.choreId]: z.string().min(1, { message: 'Chore is required.' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const CreateEventForm = () => {
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      [FormField.name]: '',
    },
    mode: 'onBlur',
  });

  const [createEvent] = useCreateEventMutation({
    onCompleted: () => {
      console.log('created');
      push(EVENT_ROUTE);
    },
    onError: (error) => setError('root', { message: error.message }),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async ({
    name,
    choreId,
  }) => {
    await createEvent({
      variables: { name, choreId },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-md"
    >
      <Controller
        name={FormField.name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            {...createInputErrorProps(errors.name)}
          />
        )}
      />

      <Button disabled={isSubmitting} type="submit" variant="contained">
        Create event
      </Button>
    </form>
  );
};

export default CreateEventForm;
