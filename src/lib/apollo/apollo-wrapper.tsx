'use client';

import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { clientAuthLink } from './client-auth-link';
import { createCache } from './create-cache';
import { errorLink } from './error-link';
import { serverAuthLink } from './server-auth-link';

// https://github.com/apollographql/apollo-client-nextjs
function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
  });

  return new NextSSRApolloClient({
    cache: createCache(),
    link: ApolloLink.from([
      // in a SSR environment, if you use multipart features like
      // @defer, you need to decide how to handle these.
      // This strips all interfaces with a `@defer` directive from your queries.
      new SSRMultipartLink({
        stripDefer: true,
      }),
      errorLink,
      typeof window === 'undefined' ? serverAuthLink : clientAuthLink,
      httpLink,
    ]),
  });
}

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
