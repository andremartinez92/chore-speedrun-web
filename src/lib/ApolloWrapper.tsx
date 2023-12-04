'use client';

import { ApolloLink, DefaultOptions, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';

const URI = 'https://parseapi.back4app.com/graphql';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const getToken = () => {
  const sessionToken = localStorage.getItem('sessionToken');

  if (sessionToken) {
    return {
      'X-Parse-Session-Token': sessionToken,
    };
  }

  return {};
};

const HEADERS = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  'X-Parse-Application-Id': process.env.EXPO_PUBLIC_B4A_APP_ID,
  'X-Parse-Client-Key': process.env.EXPO_PUBLIC_B4A_CLIENT_KEY,
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext(() => {
  const sessionToken = getToken();
  const headers = { ...HEADERS, ...sessionToken };

  return { headers };
});

function makeClient() {
  const httpLink = new HttpLink({
    uri: URI,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            errorLink,
            authLink,
            httpLink,
          ])
        : ApolloLink.from([errorLink, authLink, httpLink]),
    defaultOptions,
  });
}

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
