import { Checkbox } from '@/components/checkbox';
import { useToast } from '@/components/toast/use-toast';
import {
  GetChoresDocument,
  useCompleteChoreMutation,
} from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';
import { useState } from 'react';

type Props = {
  isCompleted: boolean;
  id: string;
};

const ChoreCompleteCheckbox = ({ isCompleted, id }: Props) => {
  const { toast } = useToast();
  const [isMarkedCompleted, setIsMarkedCompleted] = useState(isCompleted);

  const [completeChore, { loading: isCompletingChore }] =
    useCompleteChoreMutation({
      refetchQueries: [GetChoresDocument],
      onCompleted: (result) => {
        const { records } = result.updateChoreCollection;
        const isChoreCompleted = records[0].is_completed;
        setIsMarkedCompleted(isChoreCompleted);

        toast({
          title: `Chore '${records[0].name}' marked ${
            isChoreCompleted ? 'completed' : 'uncompleted'
          }.`,
        });
      },
      onError: (e) => {
        toast({ title: e.message, variant: 'destructive' });
      },
    });

  return (
    <Checkbox
      aria-label={
        isMarkedCompleted
          ? 'Checkbox to mark chore uncompleted'
          : 'Checkbox to mark chore completed'
      }
      checked={isMarkedCompleted}
      disabled={isCompletingChore}
      onCheckedChange={(checked) => {
        setIsMarkedCompleted(!isMarkedCompleted);
        void completeChore({
          variables: {
            choreId: id,
            isCompleted: checked === true, // checked can be 'indeterminate'
            lastCompletedAt: isMarkedCompleted
              ? undefined
              : convertToGqlDate(new Date()),
          },
        });
      }}
    />
  );
};

export default ChoreCompleteCheckbox;
