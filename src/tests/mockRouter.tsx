import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ErrorBoundary } from '../components';
import { ThemeProvider } from '../store/Theme/ThemeProvider';

export const mockRouter = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <ErrorBoundary>
        <Provider store={store}>{ui}</Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
