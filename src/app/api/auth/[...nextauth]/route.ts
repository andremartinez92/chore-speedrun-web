import { initializeParse } from '@parse/react';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { User } = require('@parse/node');
        initializeParse(
          'https://parseapi.back4app.com/',
          process.env.EXPO_PUBLIC_B4A_APP_ID, // Application ID
          process.env.EXPO_PUBLIC_B4A_JS_KEY, // Javascript key
          process.env.SECRET_MASTER_KEY // Master key
        );

        const user = new User();
        user.setUsername(credentials.username);
        user.setPassword(credentials.password);

        try {
          await user.logIn();
          // if logIn is successful, it will return user object
          // next-auth uses the returned user object to populate the user email.
          // You might need to adapt this based on your User class structure
          return Promise.resolve(user);
        } catch (error) {
          return Promise.resolve(null); // or Promise.reject(new Error('Error message'))
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
