import { gql } from '@apollo/client';

export const ChoresQuery = gql`
  query choresQuery($userId: ID!, $isCompleted: Boolean!) {
    chores(
      where: {
        user: { have: { id: { equalTo: $userId } } }
        isCompleted: { equalTo: $isCompleted }
      }
      order: [lastCompletedAt_ASC]
    ) {
      edges {
        node {
          id
          name
          recurringDays
          isPriority
          isCompleted
          lastCompletedAt
        }
      }
    }
  }
`;

export const ChoresSingleQuery = gql`
  query choresSingleQuery($choreId: ID!) {
    chore(id: $choreId) {
      id
      name
      recurringDays
      isPriority
      isCompleted
    }
    events(where: { chore: { have: { id: { equalTo: $choreId } } } }) {
      edges {
        node {
          id
          name
          chore {
            name
          }
        }
      }
    }
  }
`;

export const ChoresCreateMutation = gql`
  mutation choresCreateMutation($input: CreateChoreInput!) {
    createChore(input: $input) {
      chore {
        id
      }
    }
  }
`;

export const ChoresDeleteMutation = gql`
  mutation choresDeleteMutation($choreId: ID!) {
    deleteChore(input: { id: $choreId }) {
      clientMutationId
    }
  }
`;

export const ChoresCompletedMutation = gql`
  mutation ChoresCompletedMutation(
    $choreId: ID!
    $isCompleted: Boolean!
    $lastCompletedAt: Date!
  ) {
    updateChore(
      input: {
        id: $choreId
        fields: { isCompleted: $isCompleted, lastCompletedAt: $lastCompletedAt }
      }
    ) {
      chore {
        id
      }
    }
  }
`;
