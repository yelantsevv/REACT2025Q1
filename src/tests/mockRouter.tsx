import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ErrorBoundary } from '../components';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { render } from '@testing-library/react';

export const mockRouter = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <ErrorBoundary>
        <Provider store={store}>{ui}</Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
