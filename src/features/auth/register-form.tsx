'use client';

import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { signUpWithEmailAndPassword } from './helpers';

enum FormField {
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

const validationSchema = z
  .object({
    [FormField.email]: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'This email is not valid.' }),
    [FormField.password]: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long.' }),
    [FormField.confirmPassword]: z
      .string()
      .min(1, 'Password confirmation is required.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: [FormField.confirmPassword],
    message: "Passwords don't match.",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      [FormField.email]: '',
      [FormField.password]: '',
      [FormField.confirmPassword]: '',
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async ({
    email,
    password,
    confirmPassword,
  }) => {
    const result = await signUpWithEmailAndPassword({
      email,
      password,
      confirmPassword,
    });

    const { error } = JSON.parse(result);
    if (error?.message) {
      setError('root', { message: error.message });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-md"
    >
      <Controller
        name={FormField.email}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            {...createInputErrorProps(errors.email)}
          />
        )}
      />

      <Controller
        name={FormField.password}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            {...createInputErrorProps(errors.password)}
          />
        )}
      />

      <Controller
        name={FormField.confirmPassword}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Confirm password"
            type="password"
            {...createInputErrorProps(errors.confirmPassword)}
          />
        )}
      />

      <Button disabled={isSubmitting} type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default RegisterForm;
