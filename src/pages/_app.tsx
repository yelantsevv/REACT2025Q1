import { Provider } from 'react-redux';
import { ThemeProvider } from '../store/Theme/ThemeProvider';
import './globals.css';
import { AppProps } from 'next/app';
import { store } from '../store/store';
import { ErrorBoundary } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
