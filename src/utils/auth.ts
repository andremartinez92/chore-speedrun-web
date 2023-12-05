import { useAuth } from '@/context/auth';
import { LogoutMutation, LoginMutation, SignUpMutation } from '@/api/auth';
import { UserAction } from '@/types';
import { useMutation } from '@apollo/client';
import {
  LoginMutationMutation,
  LoginMutationMutationVariables,
  LogoutMutationMutation,
  LogoutMutationMutationVariables,
  SignUpMutationMutation,
  SignUpMutationMutationVariables,
} from '@/gql/graphql';

export const useLogin = () => {
  const { user, updateUser } = useAuth();

  const [mutation, { loading: isLoginLoading }] = useMutation<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >(LoginMutation);

  const loginUser = (username: string, password: string) => {
    mutation({
      variables: {
        input: {
          username,
          password,
        },
      },
      onCompleted: (response) => {
        const newUser = response.logIn?.viewer || null;
        updateUser(newUser, UserAction.LOGIN);
      },
    });
  };

  return { user, loginUser, isLoginLoading };
};

export const useRegister = () => {
  const { user, updateUser } = useAuth();

  const [mutation, { loading: isRegisterLoading }] = useMutation<
    SignUpMutationMutation,
    SignUpMutationMutationVariables
  >(SignUpMutation);

  const registerUser = (username: string, password: string) => {
    mutation({
      variables: {
        input: {
          fields: {
            username,
            password,
          },
        },
      },
      onCompleted: (response) => {
        updateUser(response.signUp?.viewer || null, UserAction.LOGIN);
      },
    });
  };

  return { user, registerUser, isRegisterLoading };
};

export const useLogout = () => {
  const { user, updateUser } = useAuth();

  const [mutation, { loading: isLogoutLoading }] = useMutation<
    LogoutMutationMutation,
    LogoutMutationMutationVariables
  >(LogoutMutation);

  const logoutUser = () => {
    mutation({
      variables: { input: {} },
      onCompleted: () => {
        updateUser(null, UserAction.LOGOUT);
      },
    });
  };

  return { user, logoutUser, isLogoutLoading };
};
