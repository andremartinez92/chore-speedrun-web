import { HelperTextProps } from '@/features/ui/input';
import { FieldError } from 'react-hook-form';

export const createInputErrorProps = (error?: FieldError): HelperTextProps => {
  return { isError: Boolean(error), helperText: error?.message || '' };
};
