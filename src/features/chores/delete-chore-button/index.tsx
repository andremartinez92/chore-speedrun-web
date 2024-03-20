import { Button, ButtonProps } from '@/components/button';
import { useToast } from '@/components/toast/use-toast';
import { GetChoresDocument, useDeleteChoreMutation } from '@/graphql/generated';

type Props = Omit<ButtonProps, 'onClick'> & {
  choreId: string;
  name: string;
};
const DeleteChoreButton = ({ choreId, name, children, ...props }: Props) => {
  const { toast } = useToast();
  const [deleteChore, { loading: isDeletingChore }] = useDeleteChoreMutation({
    variables: { choreId },
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
      aria-label={`Delete chore ${name}`}
      disabled={isDeletingChore}
      {...props}
      onClick={() => deleteChore()}
    >
      {children}
    </Button>
  );
};

export default DeleteChoreButton;
