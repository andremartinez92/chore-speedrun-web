'use client';

import { Button, ButtonProps } from '@/components/button';
import {
  GetChoreRecordsDocument,
  GetChoresDocument,
  useCompleteChoreMutation,
} from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';
import { toast } from 'sonner';

type Props = Omit<ButtonProps, 'children' | 'onClick'> & {
  choreId: string;
};

const CompleteChoreButton = ({ choreId, disabled, ...props }: Props) => {
  const [completeChore, { loading: isLoading }] = useCompleteChoreMutation({
    variables: {
      choreId,
      isCompleted: true,
      lastCompletedAt: convertToGqlDate(new Date()),
    },
    refetchQueries: [GetChoresDocument, GetChoreRecordsDocument],
    onCompleted: (result) =>
      toast(`${result.updateChoreCollection.records[0]?.name} completed!`),
    onError: (error) => toast(`Error: ${error.message}`, { important: true }),
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
