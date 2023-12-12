'use client';

import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { clientAuthLink, serverAuthLink } from './authLink';
import { createCache } from './createCache';
import { errorLink } from './errorLink';

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
