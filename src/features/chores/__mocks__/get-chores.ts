import { GetChoresDocument, GetChoresQuery } from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';
import { MOCK_DATE } from '@/tests/mocks/date';

const CHORE_COLLECTION: GetChoresQuery['choreCollection'] = {
  edges: [
    {
      node: {
        id: '123456',
        name: 'Test chore',
        recurring_days: 12,
        is_priority: false,
        last_completed_at: convertToGqlDate(MOCK_DATE),
        is_completed: false,
      },
    },
  ],
};

export const GET_CHORES_QUERY_MOCK = {
  request: { query: GetChoresDocument, variables: { isCompleted: false } },
  result: { data: { choreCollection: CHORE_COLLECTION } },
};
