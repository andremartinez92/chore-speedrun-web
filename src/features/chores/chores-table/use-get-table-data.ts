import {
  GetChoresQueryVariables,
  useGetChoresSuspenseQuery,
} from '@/graphql/generated';
import { useMemo } from 'react';

const useGetTableData = ({ isCompleted }: GetChoresQueryVariables) => {
  const response = useGetChoresSuspenseQuery({
    variables: { isCompleted },
    fetchPolicy: 'cache-and-network',
  });

  const tableData = useMemo(() => {
    return (
      response.data?.choreCollection?.edges.map(({ node }) => ({
        data: {
          id: node.id,
          recurringDays: node.recurring_days,
          isPriority: node.is_priority,
          isCompleted: node.is_completed,
          lastCompletedAt: node.last_completed_at ?? undefined,
          name: node.name,
        },
      })) || []
    );
  }, [response.data?.choreCollection]);

  return { ...response, tableData };
};

export default useGetTableData;
