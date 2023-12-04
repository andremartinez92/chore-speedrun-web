import { gql } from '@apollo/client';

export const RecordsCreateMutation = gql`
  mutation recordsCreateMutation(
    $choreId: ID!
    $eventId: ID!
    $userId: ID!
    $time: Float!
    $date: Date!
  ) {
    updateEvent(
      input: {
        id: $eventId
        fields: {
          records: {
            createAndAdd: [
              {
                time: $time
                user: { link: $userId }
                event: { link: $eventId }
              }
            ]
          }
        }
      }
    ) {
      clientMutationId
    }

    updateChore(input: { id: $choreId, fields: { lastCompletedAt: $date } }) {
      clientMutationId
    }
  }
`;

export const RecordsDeleteMutation = gql`
  mutation recordsDeleteMutation($recordId: ID!) {
    deleteRecord(input: { id: $recordId }) {
      clientMutationId
    }
  }
`;
