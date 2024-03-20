import { z } from 'zod';

export enum CreateChoreFormFieldEnum {
  name = 'name',
  recurringDays = 'recurringDays',
  isPriority = 'isPriority',
}

export const validationSchema = z.object({
  [CreateChoreFormFieldEnum.name]: z
    .string()
    .min(1, { message: 'Name is required.' })
    .trim(),
  [CreateChoreFormFieldEnum.recurringDays]: z.coerce
    .number()
    .int()
    .lte(400, 'Must be lower than 400.'),
  [CreateChoreFormFieldEnum.isPriority]: z.boolean(),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
