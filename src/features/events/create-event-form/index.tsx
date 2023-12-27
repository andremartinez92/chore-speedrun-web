'use client';

import ChoreSelect from '@/features/chores/chore-select';
import { Button } from '@/features/ui/button';
import { InputWithLabel } from '@/features/ui/input-with-label';
import { useCreateEventMutation } from '@/graphql/generated';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { getEventRoute } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

enum FormFieldEnum {
  name = 'name',
  choreId = 'choreId',
}

const validationSchema = z.object({
  [FormFieldEnum.name]: z
    .string()
    .min(1, { message: 'Name is required.' })
    .trim(),
  [FormFieldEnum.choreId]: z.string().min(1, { message: 'Chore is required.' }),
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
      [FormFieldEnum.name]: '',
      [FormFieldEnum.choreId]: choreId || '',
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
        name={FormFieldEnum.name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputWithLabel
            {...field}
            label="Name"
            {...createInputErrorProps(errors.name)}
          />
        )}
      />

      <Controller
        name={FormFieldEnum.choreId}
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
