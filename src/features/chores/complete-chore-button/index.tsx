'use client';

import { Button, ButtonProps } from '@/components/button';
import { useToast } from '@/components/toast/use-toast';
import {
  GetChoreRecordsDocument,
  GetChoresDocument,
  useCompleteChoreMutation,
} from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';

type Props = Omit<ButtonProps, 'onClick'> & {
  choreId: string;
  isCompleted: boolean;
};

const CompleteChoreButton = ({
  choreId,
  disabled,
  children,
  isCompleted,
  ...props
}: Props) => {
  const { toast } = useToast();

  const [completeChore, { loading: isLoading }] = useCompleteChoreMutation({
    variables: {
      choreId,
      isCompleted,
      lastCompletedAt: convertToGqlDate(new Date()),
    },
    refetchQueries: [GetChoresDocument, GetChoreRecordsDocument],
    onCompleted: (result) => {
      const { records } = result.updateChoreCollection;
      const isChoreCompleted = records[0].is_completed;

      toast({
        title: `Chore ${records[0]?.name} ${
          isChoreCompleted ? 'completed!' : 'uncompleted.'
        }`,
      });
    },
    onError: (error) =>
      toast({ title: `Error: ${error.message}`, variant: 'destructive' }),
  });

  const handleClick = () => {
    const newIsCompleted = !isCompleted;
    void completeChore({
      variables: {
        choreId,
        isCompleted: newIsCompleted,
        lastCompletedAt: !newIsCompleted
          ? undefined
          : convertToGqlDate(new Date()),
      },
    });
  };

  return (
    <Button {...props} onClick={handleClick} disabled={isLoading || disabled}>
      {children}
    </Button>
  );
};

export default CompleteChoreButton;
