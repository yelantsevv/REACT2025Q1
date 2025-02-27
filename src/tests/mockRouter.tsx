import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '../store/Theme/ThemeProvider';

export const mockRouter = (ui: React.ReactElement, route?: string) => {
  return render(
    <MemoryRouter initialEntries={[`/${route || ''}`]}>
      <ThemeProvider>
        <ErrorBoundary>
          <Provider store={store}>{ui}</Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </MemoryRouter>
  );
};
