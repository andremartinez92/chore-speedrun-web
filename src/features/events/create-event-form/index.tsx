'use client';

import ChoreSelect from '@/features/chores/chore-select';
import { useCreateEventMutation } from '@/graphql/generated';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { EVENT_ROUTE } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const choreId = searchParams.get('choreId');

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      [FormField.name]: '',
      [FormField.choreId]: choreId || '',
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

      <Controller
        name={FormField.choreId}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ChoreSelect field={field} error={errors.choreId} />
        )}
      />

      <Button disabled={isSubmitting} type="submit" variant="contained">
        Create event
      </Button>
    </form>
  );
};

export default CreateEventForm;
