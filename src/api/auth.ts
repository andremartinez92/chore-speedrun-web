import { gql } from '@apollo/client';

export const LoginMutation = gql`
  mutation loginMutation($input: LogInInput!) {
    logIn(input: $input) {
      viewer {
        sessionToken
        user {
          id
          username
        }
      }
    }
  }
`;

export const SignUpMutation = gql`
  mutation signUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      viewer {
        sessionToken
        user {
          id
          username
        }
      }
    }
  }
`;

export const LogoutMutation = gql`
  mutation logoutMutation($input: LogOutInput!) {
    logOut(input: $input) {
      ok
    }
  }
`;
