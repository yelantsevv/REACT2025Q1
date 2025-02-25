import {
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from 'react-router';

import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { ThemeProvider } from '../src/store/Theme/ThemeProvider';
import { useTheme } from '../src/store/Theme/useTheme';
import Search from '../src/components/Search/Search';
import styles from '../src/App.module.css';
import Selected from '../src/components/Selected/Selected';
import Spinner from '../src/components/Spinner/Spinner';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import ErrorButton from '../src/components/ErrorButton/ErrorButton';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

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
        {isNavigating && <Spinner />}
        <Outlet />
        <ErrorButton />
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
          <ThemeProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
