'use client';

import { useGetChoresQuery } from '@/graphql/generated';
import { createInputErrorProps } from '@/lib/utils/create-input-error-props';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { useMemo, useState } from 'react';
import { ControllerRenderProps, FieldError } from 'react-hook-form';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  error?: FieldError;
};

type Option = {
  id: string;
  name: string;
};

function ChoreSelect({ field, error }: Props) {
  const { ref, value, onChange, ...fields } = field;

  const [options, setOptions] = useState<Option[]>([]);
  const { loading } = useGetChoresQuery({
    onCompleted: (result) =>
      setOptions(
        result.choreCollection?.edges.map(({ node }) => ({
          id: node.id,
          name: node.name,
        })) ?? []
      ),
    onError: () => setOptions([]),
  });

  const [isOpen, setIsOpen] = useState(false);
  const selectedValue = useMemo(() => {
    // Show selected chore while loading for the first time
    if (options.length === 0 && value) {
      return { name: 'Loading...', id: value };
    }

    // null prevents component from going from uncontrolled to controlled;
    // undefined causes that error
    return options.find((option) => option.id === value) || null;
  }, [options, value]);

  return (
    <Autocomplete
      {...fields}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      value={selectedValue}
      inputValue={selectedValue?.name || ''}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={(_, value) => {
        onChange(value?.id);
      }}
      onInputChange={() => {}}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={ref}
          label="Select chore"
          {...createInputErrorProps(error)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default ChoreSelect;
