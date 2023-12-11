import { GRAPHQL_URL } from '@/constants';
import { ApolloLink, HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { clientAuthLink } from './authLink';
import { errorLink } from './errorLink';

const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: ApolloLink.from([
      errorLink,
      clientAuthLink,
      new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: GRAPHQL_URL,
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        // fetchOptions: { cache: "no-store" },
      }),
    ]),
  });
});

export default getClient;
