'use client';

import ChoreSelect from '@/features/chores/chore-select';
import { Button } from '@/features/ui/button';
import { Input } from '@/features/ui/input';
import { useCreateEventMutation } from '@/graphql/generated';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { getEventRoute } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
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
    onCompleted: (result) => {
      const newEventId = result.insertIntoEventCollection?.records[0].id;
      if (newEventId) push(getEventRoute(newEventId));
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
          <Input
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

      <Button disabled={isSubmitting} type="submit">
        Create event
      </Button>
    </form>
  );
};

export default CreateEventForm;
