'use client';

import { SupabaseProvider } from '@/lib/SupabaseProvider';
import apolloClient from '@/lib/apolloClient';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <SupabaseProvider>
        <ApolloNextAppProvider makeClient={apolloClient}>
          <body className={textFont.className}>{children}</body>
        </ApolloNextAppProvider>
      </SupabaseProvider>
    </html>
  );
}
