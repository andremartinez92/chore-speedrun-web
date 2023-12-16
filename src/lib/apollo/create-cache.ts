import { defaultDataIdFromObject } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';

export const createCache = () => {
  return new NextSSRInMemoryCache({
    dataIdFromObject(responseObject) {
      if ('nodeId' in responseObject) {
        return `${responseObject.nodeId}`;
      }

      return defaultDataIdFromObject(responseObject);
    },
  });
};
