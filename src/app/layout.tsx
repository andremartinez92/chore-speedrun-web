import NavBar from '@/features/ui/navbar';
import { ThemeProvider } from '@/features/ui/theme-provider';
import { ApolloWrapper } from '@/lib/apollo/apollo-wrapper';
import { cn } from '@/lib/utils/cn';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const textFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
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
      <ApolloWrapper>
        <AppRouterCacheProvider>
          <body className={cn('font-sans', textFont.variable)}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              {children}
            </ThemeProvider>
          </body>
        </AppRouterCacheProvider>
      </ApolloWrapper>
    </html>
  );
}
