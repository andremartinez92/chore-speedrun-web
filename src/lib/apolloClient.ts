import {
  ApolloLink,
  DefaultOptions,
  HttpLink,
  defaultDataIdFromObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { supabase } from './supabase';

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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new NextSSRInMemoryCache({
  dataIdFromObject(responseObject) {
    if ('nodeId' in responseObject) {
      return `${responseObject.nodeId}`;
    }

    return defaultDataIdFromObject(responseObject);
  },
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
});

const authLink = setContext(async (_, { headers }) => {
  const token = (await supabase.auth.getSession()).data.session?.access_token;

  return {
    headers: {
      ...headers,
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const makeApolloClient = () =>
  new NextSSRApolloClient({
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({ stripDefer: true }),
            errorLink,
            authLink,
            httpLink,
          ])
        : ApolloLink.from([errorLink, authLink, httpLink]),
    cache,
    defaultOptions,
  });

export default makeApolloClient;
