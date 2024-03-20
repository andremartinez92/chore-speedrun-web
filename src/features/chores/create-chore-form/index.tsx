'use client';

import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import { InputWithLabel } from '@/components/input-with-label';
import { Label } from '@/components/label';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { Controller } from 'react-hook-form';
import useCreateChoreForm from './use-create-chore-form';
import { CreateChoreFormFieldEnum } from './validation-schema';

const CreateChoreForm = () => {
  const { formProps, onSubmit } = useCreateChoreForm();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = formProps;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-md"
    >
      <Controller
        name={CreateChoreFormFieldEnum.name}
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
        name={CreateChoreFormFieldEnum.recurringDays}
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
        name={CreateChoreFormFieldEnum.isPriority}
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
