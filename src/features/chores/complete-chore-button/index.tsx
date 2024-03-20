'use client';

import { Button, ButtonProps } from '@/components/button';
import { useToast } from '@/components/toast/use-toast';
import {
  GetChoreRecordsDocument,
  GetChoresDocument,
  useCompleteChoreMutation,
} from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';

type Props = Omit<ButtonProps, 'children' | 'onClick'> & {
  choreId: string;
};

const CompleteChoreButton = ({ choreId, disabled, ...props }: Props) => {
  const { toast } = useToast();

  const [completeChore, { loading: isLoading }] = useCompleteChoreMutation({
    variables: {
      choreId,
      isCompleted: true,
      lastCompletedAt: convertToGqlDate(new Date()),
    },
    refetchQueries: [GetChoresDocument, GetChoreRecordsDocument],
    onCompleted: (result) =>
      toast({
        title: `${result.updateChoreCollection.records[0]?.name} completed!`,
      }),
    onError: (error) =>
      toast({ title: `Error: ${error.message}`, variant: 'destructive' }),
  });

  return (
    <Button
      {...props}
      onClick={() => completeChore()}
      disabled={isLoading || disabled}
    >
      Complete chore
    </Button>
  );
};

export default CompleteChoreButton;
