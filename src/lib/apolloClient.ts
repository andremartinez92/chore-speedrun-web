import { createHttpLink, defaultDataIdFromObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { supabase } from './supabase';

const cache = new NextSSRInMemoryCache({
  dataIdFromObject(responseObject) {
    if ('nodeId' in responseObject) {
      return `${responseObject.nodeId}`;
    }

    return defaultDataIdFromObject(responseObject);
  },
});

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
});

const authLink = setContext(async (_, { headers }) => {
  const token = (await supabase.auth.getSession()).data.session?.access_token;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const makeApolloClient = () =>
  new NextSSRApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

export default makeApolloClient;
