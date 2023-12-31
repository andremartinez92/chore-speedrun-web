'use client';

import { Button } from '@/features/ui/button';
import { Checkbox } from '@/features/ui/checkbox';
import { InputWithLabel } from '@/features/ui/input-with-label';
import { Label } from '@/features/ui/label';
import { useCreateChoreMutation } from '@/graphql/generated';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { getChoreRoute } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

enum FormFieldEnum {
  name = 'name',
  recurringDays = 'recurringDays',
  isPriority = 'isPriority',
}

const validationSchema = z.object({
  [FormFieldEnum.name]: z
    .string()
    .min(1, { message: 'Name is required.' })
    .trim(),
  [FormFieldEnum.recurringDays]: z.coerce
    .number()
    .int()
    .lte(400, 'Must be lower than 400.'),
  [FormFieldEnum.isPriority]: z.boolean(),
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
      [FormFieldEnum.name]: '',
      [FormFieldEnum.recurringDays]: 0,
      [FormFieldEnum.isPriority]: false,
    },
    mode: 'onBlur',
  });

  const [createChore] = useCreateChoreMutation({
    onCompleted: (result) => {
      const newChoreId = result.insertIntoChoreCollection?.records[0].id;

      if (newChoreId) {
        toast('Chore created.');
        push(getChoreRoute(newChoreId));
      }
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
        name={FormFieldEnum.recurringDays}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputWithLabel
            {...field}
            label="Recurring days"
            type="number"
            {...createInputErrorProps(errors.recurringDays)}
          />
        )}
      />

      <Controller
        control={control}
        name={FormFieldEnum.isPriority}
        render={({ field }) => (
          <>
            <Label htmlFor={field.name}>Priority</Label>
            <Checkbox
              id={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </>
        )}
      />

      <Button disabled={isSubmitting} type="submit">
        Create chore
      </Button>
    </form>
  );
};

export default CreateChoreForm;
