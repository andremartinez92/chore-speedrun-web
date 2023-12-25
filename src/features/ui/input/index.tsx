import { cn } from '@/lib/utils/cn';
import { forwardRef } from 'react';
import { Label } from '../label';

export type HelperTextProps = {
  helperText: string;
  isError: boolean;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText: string;
  isError: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, helperText, isError, label, type, ...props }, ref) => {
    return (
      <>
        <Label htmlFor={label}>{label}</Label>
        <input
          id={label}
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <div className={cn(isError ? 'text-destructive' : '')}>
          {helperText}
        </div>
      </>
    );
  }
);
Input.displayName = 'Input';

export { Input };
