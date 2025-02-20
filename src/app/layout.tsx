import './globals.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import styles from './App.module.css';
import ThemeBtn from '../Theme/ThemeBtn';
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
          <div className={styles.app}>
            <ThemeBtn className={styles.themeBtn} />
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
        </Providers>
      </body>
    </html>
  );
}
