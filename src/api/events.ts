import { gql } from '@apollo/client';

export const EventsCreateMutation = gql`
  mutation eventsCreateMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      event {
        id
      }
    }
  }
`;

export const EventsQuery = gql`
  query eventsQuery($userId: ID!) {
    events(where: { user: { have: { id: { equalTo: $userId } } } }) {
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

export const EventQuery = gql`
  query eventQuery($eventId: ID!) {
    event(id: $eventId) {
      id
      name
      chore {
        id
        name
      }
    }

    records(
      where: { event: { have: { id: { equalTo: $eventId } } } }
      order: time_ASC
    ) {
      edges {
        cursor
        node {
          id
          time
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const EventsDeleteMutation = gql`
  mutation eventsDeleteMutation($eventId: ID!) {
    deleteEvent(input: { id: $eventId }) {
      clientMutationId
    }
  }
`;
