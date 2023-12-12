'use client';

import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink, defaultDataIdFromObject } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { clientAuthLink, serverAuthLink } from './authLink';
import { errorLink } from './errorLink';

function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
  });

  const cache = new NextSSRInMemoryCache({
    dataIdFromObject(responseObject) {
      if ('nodeId' in responseObject) {
        return `${responseObject.nodeId}`;
      }

      return defaultDataIdFromObject(responseObject);
    },
  });

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache,
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
