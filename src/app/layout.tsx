import { ApolloWrapper } from '@/lib/apollo/ApolloWrapper';
// https://mui.com/material-ui/about-the-lab/#typescript
import NavBar from '@/components/Navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
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
        <AppRouterCacheProvider>
          <body className={textFont.className}>
            <NavBar />
            {children}
          </body>
        </AppRouterCacheProvider>
      </ApolloWrapper>
    </html>
  );
}
