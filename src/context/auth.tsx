import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UserAction, UserType } from '@/types';
import { useProtectedRoute } from '@/utils/routing';
import { useLazyQuery } from '@apollo/client';
import { GetUserQuery } from '@/api/user';
import { GetUserQuery as GetUserQueryQuery } from '@/gql/graphql';

const AuthContext = createContext<{
  user: UserType | null;
  updateUser: (user: UserType | null, action?: UserAction) => void;
  isLoadingUser: boolean;
}>({
  user: null,
  updateUser: () => {},
  isLoadingUser: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const updateUser = (newUser: UserType | null, action?: UserAction) => {
    if (action === UserAction.LOGIN && newUser?.sessionToken) {
      window?.localStorage.setItem('sessionToken', newUser.sessionToken);
    } else if (action === UserAction.LOGOUT) {
      window?.localStorage.removeItem('sessionToken');
    }

    setUser(newUser);
  };

  useProtectedRoute(user, isLoadingUser);

  const [getUser] = useLazyQuery<GetUserQueryQuery>(GetUserQuery, {
    onCompleted: (result) => {
      updateUser(result.viewer, UserAction.LOGIN);
      setIsLoadingUser(false);
    },
    onError: () => {
      updateUser(null, UserAction.LOGOUT);
      setIsLoadingUser(false);
    },
  });

  useEffect(() => {
    setIsLoadingUser(true);
    getUser();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, updateUser, isLoadingUser }}>
      {children}
    </AuthContext.Provider>
  );
};
