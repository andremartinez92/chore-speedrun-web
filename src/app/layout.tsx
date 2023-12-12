import { ApolloWrapper } from '@/lib/apollo/ApolloWrapper';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Chore Speedrun',
};

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
      <ApolloWrapper>
        <body className={textFont.className}>{children}</body>
      </ApolloWrapper>
    </html>
  );
}
