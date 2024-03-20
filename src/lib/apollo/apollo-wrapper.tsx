'use client';

import { GRAPHQL_URL } from '@/constants';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { loadDevMessages } from '@apollo/client/dev';
import { clientAuthLink } from './client-auth-link';
import { errorLink } from './error-link';

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, clientAuthLink, httpLink]),
});

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  if (process.env.NODE_ENV !== 'production') {
    loadDevMessages();
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
