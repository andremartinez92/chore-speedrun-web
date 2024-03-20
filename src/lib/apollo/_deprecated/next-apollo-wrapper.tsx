'use client';

import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { clientAuthLink } from '../client-auth-link';
import { errorLink } from '../error-link';
import { createCache } from './create-cache';
import { serverAuthLink } from './server-auth-link';

// https://github.com/apollographql/apollo-client-nextjs
function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
  });

  return new NextSSRApolloClient({
    cache: createCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            errorLink,
            serverAuthLink,
            httpLink,
          ])
        : ApolloLink.from([errorLink, clientAuthLink, httpLink]),
  });
}

export const NextApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
