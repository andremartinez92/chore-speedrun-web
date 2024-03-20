import { useToast } from '@/components/toast/use-toast';
import { useCreateChoreMutation } from '@/graphql/generated';
import { getChoreRoute } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CreateChoreFormFieldEnum,
  ValidationSchema,
  validationSchema,
} from './validation-schema';

const useCreateChoreForm = () => {
  const { toast } = useToast();
  const { push } = useRouter();

  const formProps = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      [CreateChoreFormFieldEnum.name]: '',
      [CreateChoreFormFieldEnum.recurringDays]: 0,
      [CreateChoreFormFieldEnum.isPriority]: false,
    },
    mode: 'onBlur',
  });

  const [createChore] = useCreateChoreMutation({
    onCompleted: (result) => {
      const newChoreId = result.insertIntoChoreCollection?.records[0].id;

      if (newChoreId) {
        toast({ title: 'Chore created.' });
        push(getChoreRoute(newChoreId));
      }
    },
    onError: (error) => formProps.setError('root', { message: error.message }),
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

  return { formProps, onSubmit };
};

export default useCreateChoreForm;
