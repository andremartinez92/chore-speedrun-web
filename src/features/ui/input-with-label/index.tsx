import { forwardRef } from 'react';
import { Input, InputProps } from '../input';
import { Label } from '../label';

export interface InputWithLabelProps extends InputProps {
  label: string;
  name: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, ...props }, ref) => {
    return (
      <div>
        <Label htmlFor={props.name}>{label}</Label>
        <Input {...props} ref={ref} />
      </div>
    );
  }
);
InputWithLabel.displayName = 'InputWithLabel';

export { InputWithLabel };
