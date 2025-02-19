import './globals.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import styles from './App.module.css';
import Theme from '../Theme/Theme';
import { ErrorBoundary, ErrorButton, Search, Selected } from '../components';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
  about,
}: {
  children: React.ReactNode;
  about: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Theme>
            <div className={styles.app}>
              <div className={styles.header}>
                <Suspense>
                  <Search />
                </Suspense>
              </div>
              <ErrorBoundary>
                {children}
                <Selected />
                <ErrorButton />
              </ErrorBoundary>
            </div>
            {about}
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
