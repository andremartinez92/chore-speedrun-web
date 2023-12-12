import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { clientAuthLink } from './authLink';
import { createCache } from './createCache';
import { errorLink } from './errorLink';

const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: createCache(),
    link: ApolloLink.from([
      errorLink,
      clientAuthLink,
      new HttpLink({ uri: GRAPHQL_URL }),
    ]),
  });
});

export default getClient;
