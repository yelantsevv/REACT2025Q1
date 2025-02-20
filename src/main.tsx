import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { About, ErrorBoundary, NotFound } from './components';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ThemeProvider } from './store/Theme/ThemeProvider.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path=":id" element={<About />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
