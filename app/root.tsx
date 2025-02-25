import {
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router';
import type { Route } from './+types/root';

import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { ThemeProvider } from '../src/store/Theme/ThemeProvider';
import { useTheme } from '../src/hooks';
import Search from '../src/components/Search/Search';
import styles from '../src/App.module.css';
import Selected from '../src/components/Selected/Selected';

export function HydrateFallback() {
  console.log('object');
  return (
    <div>
      <p>Loading, please wait...sdsd</p>
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div data-testid="theme" className={styles[theme]}>
      <button
        data-testid="theme-btn"
        className={styles.themeBtn}
        onClick={toggleTheme}
      >
        {theme}
      </button>
      <div className={styles.app}>
        <div className={styles.header}>
          <Search />
        </div>
        <Outlet />
      </div>
      <Selected />
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main id="error-page">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
