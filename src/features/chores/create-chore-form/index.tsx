'use client';

import { Button } from '@/features/ui/button';
import { Input } from '@/features/ui/input';
import { useCreateChoreMutation } from '@/graphql/generated';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { getChoreRoute } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

enum FormField {
  name = 'name',
  recurringDays = 'recurringDays',
  isPriority = 'isPriority',
}

const validationSchema = z.object({
  [FormField.name]: z.string().min(1, { message: 'Name is required.' }).trim(),
  [FormField.recurringDays]: z.coerce
    .number()
    .int()
    .lte(400, 'Must be lower than 400.'),
  [FormField.isPriority]: z.boolean(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const CreateChoreForm = () => {
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
      [FormField.recurringDays]: 0,
      [FormField.isPriority]: false,
    },
    mode: 'onBlur',
  });

  const [createChore] = useCreateChoreMutation({
    onCompleted: (result) => {
      const newChoreId = result.insertIntoChoreCollection?.records[0].id;

      if (newChoreId) push(getChoreRoute(newChoreId));
    },
    onError: (error) => setError('root', { message: error.message }),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async ({
    name,
    recurringDays,
    isPriority,
  }) => {
    await createChore({
      variables: {
        name,
        recurringDays,
        isPriority,
      },
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
        name={FormField.recurringDays}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            {...field}
            label="Recurring days"
            type="number"
            {...createInputErrorProps(errors.recurringDays)}
          />
        )}
      />

      <FormControlLabel
        label="Priority"
        control={
          <Controller
            name={FormField.isPriority}
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
        }
      />

      <Button disabled={isSubmitting} type="submit">
        Create chore
      </Button>
    </form>
  );
};

export default CreateChoreForm;
