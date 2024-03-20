import { Button } from '@/components/button';
import { useToast } from '@/components/toast/use-toast';
import { GetChoresDocument, useDeleteChoreMutation } from '@/graphql/generated';
import { Trash2Icon } from 'lucide-react';

type Props = { id: string; name: string };

const ChoreDeleteButton = ({ id, name }: Props) => {
  const { toast } = useToast();
  const [deleteChore, { loading: isDeletingChore }] = useDeleteChoreMutation({
    variables: { choreId: id },
    refetchQueries: [GetChoresDocument],
    onCompleted: () => {
      toast({ title: `Chore '${name}' deleted.` });
    },
    onError: (e) => {
      toast({ title: e.message, variant: 'destructive' });
    },
  });

  return (
    <Button
      className="text-destructive"
      variant="outline"
      size="icon"
      aria-label={`Delete chore ${name}`}
      onClick={() => deleteChore()}
      disabled={isDeletingChore}
    >
      <Trash2Icon className="h-4 w-4" />
    </Button>
  );
};

export default ChoreDeleteButton;
