import { Provider } from 'react-redux';
import { ThemeProvider } from '../store/Theme/ThemeProvider';
import './globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
