import { TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

export const createInputErrorProps = (
  error?: FieldError
): {
  error: TextFieldProps['error'];
  helperText: TextFieldProps['helperText'];
} => {
  // Using a space to prevent height changes, as suggested by the docs
  // https://mui.com/material-ui/react-text-field/#helper-text
  return { error: Boolean(error), helperText: error?.message || ' ' };
};
