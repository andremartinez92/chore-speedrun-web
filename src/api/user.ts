import { gql } from '@apollo/client';

export const GetUserQuery = gql`
  query getUser {
    viewer {
      sessionToken
      user {
        id
        username
      }
    }
  }
`;
