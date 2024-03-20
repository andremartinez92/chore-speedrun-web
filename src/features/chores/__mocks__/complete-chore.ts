import { CompleteChoreMutation } from '@/graphql/generated';

export const completedChoreResponse: CompleteChoreMutation = {
  updateChoreCollection: {
    affectedCount: 1,
    records: [{ id: '123456', is_completed: true, name: 'Test chore' }],
  },
};
