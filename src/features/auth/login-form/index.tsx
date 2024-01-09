'use client';

import { Button } from '@/features/ui/button';
import { InputWithLabel } from '@/features/ui/input-with-label';
import { signInWithEmail } from '@/lib/auth/sign-in-with-email';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

enum FormField {
  email = 'email',
  password = 'password',
}

const validationSchema = z.object({
  [FormField.email]: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'This email is not valid.' }),
  [FormField.password]: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const LoginForm = ({ className = '' }: { className?: string }) => {
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
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async ({
    email,
    password,
  }) => {
    const result = await signInWithEmail({
      email,
      password,
    });

    const { error } = JSON.parse(result);
    if (error?.message) {
      setError('root', {
        message:
          'Error signing in. Please verify your email and password and try again.',
      });
      toast(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} flex flex-col gap-8 max-w-md`}
    >
      <Controller
        name={FormField.email}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputWithLabel
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
          <InputWithLabel
            {...field}
            label="Password"
            type="password"
            {...createInputErrorProps(errors.password)}
          />
        )}
      />

      <Button disabled={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
