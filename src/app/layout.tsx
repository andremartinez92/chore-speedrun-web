import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toast/toaster';
import NavBar from '@/features/ui/navbar';
import { ApolloWrapper } from '@/lib/apollo/apollo-wrapper';
import { cn } from '@/lib/utils/cn';
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
        <body className={cn('font-sans', textFont.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </ApolloWrapper>
    </html>
  );
}
