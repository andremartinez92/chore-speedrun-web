import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { createCache } from './create-cache';
import { errorLink } from './error-link';
import { serverAuthLink } from './server-auth-link';

const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: createCache(),
    link: ApolloLink.from([
      errorLink,
      serverAuthLink,
      new HttpLink({ uri: GRAPHQL_URL }),
    ]),
  });
});

export default getClient;
